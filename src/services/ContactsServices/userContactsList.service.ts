
import { IUserAndContactsRequestReturnedClient } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";


const userContactsListService = async (userId: string): Promise<IUserAndContactsRequestReturnedClient> => {
    const repositoryUser= AppDataSource.getRepository(User);
    const findContacts = await repositoryUser.findOneOrFail({
        where: { id: userId },
        relations: ["contacts"],
        select: ["id", "name", "email", "isAdm", "isActive", "createdAt", "phone", "contacts", "profileImage" ],
      });

      return   findContacts
  };
  
  export default userContactsListService;