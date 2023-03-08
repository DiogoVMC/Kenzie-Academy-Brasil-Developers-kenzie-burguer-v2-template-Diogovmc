import { createContext, useEffect, useState } from 'react';
import {
  ILoginResponse,
  IRegisterResponse,
  IUserContext,
  IUserLogin,
  IProviderProps,
  IUserRegister,
} from '../type';
import { api } from '../services/api';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IProviderProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');

    if (token) {
      async function autoLogin() {
        try {
          const response = await api.get('/products', {
            headers: {
              Authorization: `Bearer ${token?.substring(1, token.length - 1)}`,
            },
          });
          navigate('/shop');
        } catch {
          localStorage.removeItem('@TOKEN');
          localStorage.removeItem('USER');
        }
      }
      autoLogin();
    } else {
      navigate('/');
    }
  }, []);

  const userRegister = async (data: IUserRegister) => {
    try {
      const response = await api.post<IRegisterResponse>('/users', data);
      navigate('/');
    } catch (error) {
      throw error;
    }
  };
  const userLogin = async (data: IUserLogin) => {
    try {
      const response = await api.post<ILoginResponse>('/login', data);
      localStorage.setItem('@TOKEN', JSON.stringify(response.data.accessToken));
      localStorage.setItem('USER', JSON.stringify(response.data.user));
      navigate('/shop');
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('USER');
    navigate('/');
  };

  const teste = () => {
    console.log('teste');
  };
  return (
    <UserContext.Provider
      value={{ userRegister, userLogin, userLogout, teste }}
    >
      {children}
    </UserContext.Provider>
  );
};
