import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ProductsContext } from '../../contexts/ProductsContext';
import ProductContent from '../../components/templates/ProductContent/ProductContent';
import ContactFooter from '../../components/templates/ContactFooter/ContactFooter';

const StyledLoader = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.background};
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(${({ isLoading }) => (isLoading ? '0%' : '-100%')});
  transition: transform 0.5s 0.3s ease;
`;

const SpecificProduct = ({ match }) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    products.map(product => {
      if (product.id == match.params.id) {
        return setCurrentProduct(product);
      }
    });
    setLoading(false);
  });

  return (
    <>
      <StyledLoader isLoading={isLoading} />
      <ProductContent productData={currentProduct} />
      <ContactFooter />
    </>
  );
};

export default SpecificProduct;
