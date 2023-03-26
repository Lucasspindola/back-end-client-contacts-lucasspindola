import { IUpdateContactRequest } from './../../interfaces/contacts/index';
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { Contact } from '../../entities/contact.entity';

const updateContactService = async (
    dataContactUpdate : IUpdateContactRequest, idContact: string, userClientId: string
) => {
    
  const contactsRepository = AppDataSource.getRepository(Contact);
  const keysUser = Object.keys(dataContactUpdate);

  if (keysUser.includes("isActive")) {
    throw new AppError(401, "Unauthorized update of this field");
  }
  if (keysUser.includes("isAdm")) {
    throw new AppError(401, "Unauthorized update of this field");
  }
  if (keysUser.includes("id")) {
    throw new AppError(401, "Unauthorized update of this field");
  }

  const contactCurrentData = await contactsRepository.findOne({
    where: { id: idContact, user: {id: userClientId}},
    withDeleted: true,
  });
  
  const contactUpdate = {
    ...contactCurrentData,
    ...dataContactUpdate,
    id: idContact,
    user:{id:userClientId}
  };

  await contactsRepository.save(contactUpdate);

  return contactUpdate;
};

export default updateContactService;
