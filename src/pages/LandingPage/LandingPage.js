import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

import Product from '../../components/templates/Product/Product';
import ContentHeader from '../../components/templates/ContentHeader/ContentHeader';
import DesignQuote from '../../components/molecules/DesignQuote/DesignQuote';
import About from '../../components/templates/About/About';
import ContactFooter from '../../components/templates/ContactFooter/ContactFooter';

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
