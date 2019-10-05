import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductsContext } from '../../contexts/ProductsContext';

import Product from '../../components/Product/Product';
import ContentHeader from '../../components/ContentHeader/ContentHeader';

const LandingPage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <ContentHeader />
      {products.map(item => (
        <Product
          key={item.id}
          name={item.name}
          addition={item.addition}
          price={item.price}
          photoURL={item.photoURL}
        />
      ))}
    </>
  );
};

export default LandingPage;
