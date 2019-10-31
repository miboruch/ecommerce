import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import Product from '../../components/templates/Product/Product';
import ContentHeader from '../../components/templates/ContentHeader/ContentHeader';
import DesignQuote from '../../components/molecules/DesignQuote/DesignQuote';
import About from '../../components/templates/About/About';
import ContactFooter from '../../components/templates/ContactFooter/ContactFooter';

const LandingPage = ({ products }) => {
  return (
    <>
      <ContentHeader />
      {products.map(item => (
        <Fade key={item.id}>
          <Link to={`/product/${item.id}`}>
            <Product
              name={item.name}
              addition={item.addition}
              price={item.price}
              photoURL={item.photoURL}
            />
          </Link>
        </Fade>
      ))}
      <DesignQuote />
      <About />
      <ContactFooter />
    </>
  );
};

const mapStateToProps = ({ firebaseReducer: { products, loading } }) => {
  return { products, loading };
};

export default connect(mapStateToProps)(LandingPage);
