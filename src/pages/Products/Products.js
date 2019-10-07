import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import TitleSection from '../../components/TitleSection/TitleSection';
import Product from '../../components/Product/Product';
import ContactFooter from '../../components/ContactFooter/ContactFooter';

const Products = () => {
  const { products } = useContext(ProductsContext);

  // products.forEach(item=>{
  //   if(item.id === 3){
  //     console.log(item);
  //   }
  // })

  return (
    <>
      <TitleSection title='PRODUCTS' />
      {products.map(item => (
        <Link to={`/product/${item.id}`} key={item.id}>
          <Product
            name={item.name}
            addition={item.addition}
            price={item.price}
            photoURL={item.photoURL}
          />
        </Link>
      ))}
      <ContactFooter />
    </>
  );
};

export default Products;
