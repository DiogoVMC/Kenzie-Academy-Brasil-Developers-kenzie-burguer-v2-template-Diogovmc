import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { useCardContext } from '../../../hooks/UseCartContext';
import { IProduct } from '../../../type';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';

const CartProductList = () => {
  const [List, setList] = useState<IProduct[]>([] as IProduct[]);
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

  return (
    <StyledCartProductList>
      <ul>
        {List.map((product) => {
          <CartProductCard
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            img={product.img}
          />;
        })}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>R$ 14,00</StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
