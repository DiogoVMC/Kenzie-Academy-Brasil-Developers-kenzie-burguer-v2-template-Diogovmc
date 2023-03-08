import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { IProduct, IProviderProps, ICardContext } from '../type';

export const CardContext = createContext<ICardContext>({} as ICardContext);

export const CardProvider = ({ children }: IProviderProps) => {
  const [list, setList] = useState<IProduct[]>([] as IProduct[]);
  const [cart, setCart] = useState<IProduct[]>([] as IProduct[]);

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');
    const createList = async () => {
      try {
        const response = await api.get('/products', {
          headers: {
            Authorization: `Bearer ${token?.substring(1, token.length - 1)}`,
          },
        });

        setList(response.data);
      } catch (error) {}
    };
    createList();
  });

  const addCard = (button: number) => {
    list.map((product) => {
      if (product.id == button) {
        setCart((arr) => [...arr, product]);
      }
      console.log(cart);
    });
  };
  const removeCard = (button: number) => {
    list.filter((product) => {
      if (product.id != button) {
        setCart((arr) => [...arr, product]);
      }
    });
  };

  return (
    <CardContext.Provider value={{ addCard, removeCard }}>
      {children}
    </CardContext.Provider>
  );
};
