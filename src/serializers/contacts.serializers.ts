import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactRequest, IUpdateContactRequest } from './../interfaces/contacts/index';

const contactSerializer: SchemaOf<IContactRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().matches(/^[0-9]+$/).min(8).max(11).required(),
    profileImage:yup.string()
  });

  
  const IUpdateContactRequestSerializer: SchemaOf<IUpdateContactRequest> = yup
  .object()
  .shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    phone: yup.string().matches(/^[0-9]+$/).min(8).max(11).notRequired(),
    profileImage: yup.string().notRequired()
  });


  export {contactSerializer, IUpdateContactRequestSerializer}