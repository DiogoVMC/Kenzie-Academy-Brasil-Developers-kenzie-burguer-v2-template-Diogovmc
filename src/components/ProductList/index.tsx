import { useContext, useEffect, useState } from 'react';
import { useCardContext } from '../../hooks/UseCartContext';
import { api } from '../../services/api';
import { IProduct } from '../../type';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';

const ProductList = () => {
  const [list, setList] = useState<IProduct[]>([] as IProduct[]);

  const token = localStorage.getItem('@TOKEN');
  useEffect(() => {
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
    <StyledProductList>
      {list.map((product) => {
        return (
          <ProductCard
            img={product.img}
            price={product.price}
            name={product.name}
            category={product.category}
            key={product.id}
            id={product.id}
          />
        );
      })}
    </StyledProductList>
  );
};

export default ProductList;
