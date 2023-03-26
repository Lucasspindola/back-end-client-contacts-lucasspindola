// deleteContactService

import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";

const deleteContactService = async (idUser: string,
  idRemoveContact: string
) => {

    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOne({
      where: { id: idRemoveContact, user: {id: idUser}},
      withDeleted: true,
    });
    
  if (!contact) {
    throw new AppError(404, "User not found");
  }

  await contactRepository.softRemove(contact);
  


  return {"message": "Contact deleted successfully."};
};

export default deleteContactService;




