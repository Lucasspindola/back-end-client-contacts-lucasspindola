import { IContactRequest, IUpdateContactRequest } from './../interfaces/contacts/index';
import { Request, Response } from "express";
import { AppError } from "../errors/AppError";
import createNewContactService from '../services/ContactsServices/createNewContact.service';
import listContactsService from '../services/ContactsServices/listContacts.service';
import updateContactService from '../services/ContactsServices/updateContact.service';
import deleteContactService from '../services/ContactsServices/deleteContact.service';
import userContactsListService from '../services/ContactsServices/userContactsList.service';



const createNewContactController = async (req: Request, res: Response) => {
const userClient = req.user;
const dataContact: IContactRequest = req.body;
const registerContact = await createNewContactService(dataContact, userClient);
return res.status(204).json(registerContact);
}

const listContactsController = async (req: Request, res: Response) => {
  const userId : string = req.params.id;
  const contacts = await listContactsService(userId);
  res.json(contacts);
};

const userContactsListController = async (req: Request, res: Response) => {
  const userId : string = req.user.id;
  const data = await userContactsListService(userId);
  res.json(data);
};

const updateContactController = async (req: Request, res: Response) => {
  try {
    const dataContactUpdate: IUpdateContactRequest = req.body;
    const userClientId: string = req.user.id;
    const idContact : string = req.params.id;
    const contactUpdate = await updateContactService(dataContactUpdate, idContact, userClientId);
    return res.json(contactUpdate);
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(401, error.message);
    }
  }
};

const deleteContactController = async (req: Request, res: Response) => {
  const idUser = req.user.id;
  const idRemoveContact = req.params.id;
  const contactDelete = await deleteContactService(idUser, idRemoveContact);

  return res.status(204).json(contactDelete);
};

export {
  createNewContactController,
  listContactsController,
  updateContactController,
  deleteContactController,
  userContactsListController
  
};
