import { Router } from "express";
import { createNewContactController, deleteContactController, listContactsController, updateContactController } from "../controllers/contacts.controllers";

import validityCheckOfUserByTokenMiddlewares from "../middlewares/validityCheckOfUserByToken.middlewares";
import dataVerificationByYupMiddlewares from "../middlewares/dataVerificationByYup.middlewares";
import { contactSerializer, IUpdateContactRequestSerializer } from "../serializers/contacts.serializers";
import adminPrivateRouteCheckMiddlewar from "../middlewares/adminPrivateRouteCheck.middlewares";
import invalidIdMiddlewarer from "../middlewares/invalidId.moddlewares";
import verifyUserExistsMiddlewar from "../middlewares/verifyUserExists.middlewares";
import privateRouteForUserOrAdminMiddlewar from "../middlewares/privateRouteForUserOrAdmin.middlewares";
import { IUpdateUserRequestSerializer } from "../serializers/user.serializer";

const contactRoutes = Router();



contactRoutes.post(
  "",
  validityCheckOfUserByTokenMiddlewares,
  dataVerificationByYupMiddlewares(contactSerializer),
  createNewContactController
);

contactRoutes.get(
  "/:id",
  validityCheckOfUserByTokenMiddlewares,
  privateRouteForUserOrAdminMiddlewar,
  listContactsController

);


contactRoutes.patch(
  "/:id",
  // invalidIdMiddlewarer,
  validityCheckOfUserByTokenMiddlewares,
  dataVerificationByYupMiddlewares(IUpdateContactRequestSerializer),
  updateContactController
);

contactRoutes.delete(
  "/:id",
  // invalidIdMiddlewarer,
  validityCheckOfUserByTokenMiddlewares,
  deleteContactController
);


export default contactRoutes;