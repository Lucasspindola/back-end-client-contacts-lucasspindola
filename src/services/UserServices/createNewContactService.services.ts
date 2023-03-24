import {
    IContactRequest,
    IUserRequestReturnedClient,
  } from "../../interfaces/users";
  import AppDataSource from "../../data-source";
  import { AppError } from "../../errors/AppError";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
export interface IUser {
  id: string,
  isAdm: boolean
}
  const createNewContactService = async (
    contactUser: IContactRequest, userClient : IUser
  ) => {
    const repositoryUser= AppDataSource.getRepository(User);
    const findUser = await repositoryUser.findOne({
      where: { id: userClient.id}
    });
    const repositoryContact = AppDataSource.getRepository(Contact);
    const findContact = await repositoryContact.findOne({
      where: { email: contactUser.email, user: { id: findUser.id } }
    });
    
    if (findContact) {
      throw new AppError(409, "Contact already exists in your database");
    }

   const contact = repositoryContact.create({...contactUser, user: findUser})
   await repositoryContact.save(contact);

  
    return  contact
  };
  
  export default createNewContactService;
  