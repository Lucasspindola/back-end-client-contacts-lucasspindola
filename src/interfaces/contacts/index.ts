export interface IContactRequest {
    name: string;
    email: string;
    phone: string;
    profileImage:string
  }

  export interface IUpdateContactRequest {
    name?: string;
    email?: string;
    phone?: string;
    profileImage?: string;
  }