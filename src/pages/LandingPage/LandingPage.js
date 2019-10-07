import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

import Product from '../../components/Product/Product';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
import DesignQuote from '../../components/DesignQuote/DesignQuote';
import About from '../../components/About/About';
import ContactFooter from '../../components/ContactFooter/ContactFooter';

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
      <DesignQuote />
      <About />
      <ContactFooter />
    </>
  );
};

export default LandingPage;
