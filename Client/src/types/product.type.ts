export interface IProduct {
  _id: string;
  name: string;
  price: number;
  description?: string;
}

export interface ICRUDProductMethod extends IProduct {
  handleGetProduct?: () => void;
}
