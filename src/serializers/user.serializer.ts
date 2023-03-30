
import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUpdateUserRequest,
  IUpdateUserResponseClient,
  IUserRequest,
  IuserRequestList,
  IUserRequestReturnedClient,
  IUserUpdateRequest,
} from "../interfaces/users";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  isAdm: yup.boolean().required(),
  phone: yup.string().matches(/^[0-9]+$/).min(8).max(11).required(),
  profileImage:yup.string()
});


const userWithoutPasswordFieldSerializer: SchemaOf<IUserRequestReturnedClient> =
  yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    isAdm: yup.boolean().notRequired(),
    id: yup.string().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
    profileImage: yup.string().notRequired(),
    phone: yup.string().notRequired()
  });
const IUpdateUserRequestSerializer: SchemaOf<IUpdateUserRequest> = yup
  .object()
  .shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired()
  });


const IUpdateUserRequestWithoutPasswordSerializer: SchemaOf<IUpdateUserResponseClient> =
  yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
  });

const IUserUpdateRequestSerializer: SchemaOf<IUserUpdateRequest> = yup
  .object()
  .shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    id: yup.string().notRequired(),
    password: yup.string().notRequired(),
    isAdm: yup.boolean().notRequired(),
    isActive: yup.boolean().notRequired(),
  });

const userWithoutPasswordFieldListSerializer: SchemaOf<IuserRequestList> = yup
  .object()
  .shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    isAdm: yup.boolean().notRequired(),
    id: yup.string().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
  });

const userVetorSerializer: SchemaOf<IuserRequestList[]> = yup.array(
  userWithoutPasswordFieldSerializer
);
export {
  userSerializer,
  userWithoutPasswordFieldSerializer,
  IUpdateUserRequestSerializer,
  IUpdateUserRequestWithoutPasswordSerializer,
  IUserUpdateRequestSerializer,
  userVetorSerializer
};
