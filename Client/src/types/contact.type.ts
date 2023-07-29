type PhoneType = {
  mobile?: string;
  home?: string;
  office?: string;
};

export interface IContact {
  id?: string;
  name?: string;
  email?: string;
  address?: string;
  gender?: string;
  profile_pic?: string;
  phone?: PhoneType;
}
