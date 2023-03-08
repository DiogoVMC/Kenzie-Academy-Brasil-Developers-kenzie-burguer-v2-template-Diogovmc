import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUserContext {
  userRegister: (data: IUserRegister) => Promise<void>;
  userLogin: (data: IUserLogin) => Promise<void>;
  userLogout: () => void;
  teste: () => void;
}
export interface ICardContext {
  addCard: (button: number) => void;
  removeCard: (button: number) => void;
  list: IProduct[];
}
export type IUserRegister = Omit<IUser, 'id'>;

export type IUserLogin = Omit<IUser, 'id' | 'name' | 'confirmPassword'>;

export interface IRegisterResponse {
  register: IUserRegister;
}

export interface ILoginResponse {
  data: {};
  accessToken: string;
  user: IUser;
}

export interface IProviderProps {
  children: ReactNode;
}
export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
