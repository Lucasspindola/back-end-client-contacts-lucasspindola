
import { Request, Response, NextFunction} from "express";
import "dotenv/config";

import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const privateRouteForUserOrAdminMiddlewar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdm = req.user.isAdm;
  const idUserContacts = req.params.id;
  const idUserToken = req.user.id;


  if (!idUserContacts) {
    return res.status(404).json({ message: "Invalid id" });
  }
  const repositoryUser = AppDataSource.getRepository(User);
  const findUserID = await repositoryUser.findOne({
    where: { id: idUserContacts },
    withDeleted: true,
  });

  if (!findUserID) {
    throw new AppError(404, "invalid id");
  }

  if (isAdm) {
    return next()
  }
  if(idUserContacts !== idUserToken){
    throw new AppError(403, "Not authorized");
  }
  return next();
};

export default privateRouteForUserOrAdminMiddlewar;
