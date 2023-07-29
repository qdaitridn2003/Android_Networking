type PhoneType = {
  home?: string;
  mobile?: string;
};

export interface IPerson {
  name?: string;
  email?: string;
  phone?: PhoneType;
}
