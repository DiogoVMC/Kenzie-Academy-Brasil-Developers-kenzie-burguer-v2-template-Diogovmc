import { useContext } from 'react';
import { CardContext } from '../contexts/CartContext';

export const useCardContext = () => {
  const cardContext = useContext(CardContext);

  if (!cardContext) {
    console.log('error');
  }

  return cardContext;
};
