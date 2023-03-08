import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { useCardContext } from '../../../hooks/UseCartContext';
import { useEffect, useState } from 'react';
import { IProduct } from '../../../type';
import { api } from '../../../services/api';
import { useUserContext } from '../../../hooks/useUserContext';

interface IProductCardProps {
  name: string;
  category: string;
  price: number;
  img: string;
  id: number;
}

const ProductCard = ({ name, category, price, img, id }: IProductCardProps) => {
  const [list, setList] = useState<IProduct[]>([] as IProduct[]);

  const { addCard } = useCardContext();

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
    <StyledProductCard>
      <div className='imageBox'>
        <img src={img} alt='Hamburguer' />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <StyledParagraph className='category'>{category}</StyledParagraph>
        <StyledParagraph className='price'>${price}</StyledParagraph>
        <StyledButton
          $buttonSize='medium'
          $buttonStyle='green'
          onClick={() => {
            addCard(id);
          }}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
