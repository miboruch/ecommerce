import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { Link } from 'react-router-dom';

import TitleSection from '../../components/TitleSection/TitleSection';
import Product from '../../components/Product/Product';
import ContactFooter from '../../components/ContactFooter/ContactFooter';

const Products = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
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
