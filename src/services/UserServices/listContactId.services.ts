
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const listContactIdService = async (contactId: string, userId: string): Promise<Contact> => {
  const repositoryContact = AppDataSource.getRepository(Contact);
  const contact= await  repositoryContact.findOne({
    where: { id: contactId, user: { id: userId } },
  });

  return contact
};

export default listContactIdService;
