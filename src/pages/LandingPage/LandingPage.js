import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={`/product/${item.id}`} key={item.id}>
          <Product
            name={item.name}
            addition={item.addition}
            price={item.price}
            photoURL={item.photoURL}
          />
        </Link>
      ))}
      <DesignQuote />
      <About />
      <ContactFooter />
    </>
  );
};

export default LandingPage;
