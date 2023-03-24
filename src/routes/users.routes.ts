import { Router } from "express";
import {
  createNewContactController,
  createNewUserController,
  deleteUserController,
  listAllUsersController,
  updateDataUserController,
} from "../controllers/users.controllers";
import validityCheckOfUserByTokenMiddlewares from "../middlewares/validityCheckOfUserByToken.middlewares";
import dataVerificationByYupMiddlewares from "../middlewares/dataVerificationByYup.middlewares";
import {
  contactSerializer,
  IUpdateUserRequestSerializer,
  userSerializer,
} from "../serializers/user.serializer";
import adminPrivateRouteCheckMiddlewar from "../middlewares/adminPrivateRouteCheck.middlewares";
import invalidIdMiddlewarer from "../middlewares/invalidId.moddlewares";

const userRoutes = Router();

userRoutes.post(
  "",
  dataVerificationByYupMiddlewares(userSerializer),
  createNewUserController
);

userRoutes.post(
  "/contact",
  validityCheckOfUserByTokenMiddlewares,
  dataVerificationByYupMiddlewares(contactSerializer),
  createNewContactController
);

userRoutes.get(
  "",
  validityCheckOfUserByTokenMiddlewares,
  adminPrivateRouteCheckMiddlewar,
  listAllUsersController
);

userRoutes.patch(
  "/:id",
  invalidIdMiddlewarer,
  validityCheckOfUserByTokenMiddlewares,
  dataVerificationByYupMiddlewares(IUpdateUserRequestSerializer),

  updateDataUserController
);

userRoutes.delete(
  "/:id",
  invalidIdMiddlewarer,
  validityCheckOfUserByTokenMiddlewares,
  adminPrivateRouteCheckMiddlewar,
  deleteUserController
);

export default userRoutes;
