import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import TitleSection from '../../components/molecules/TitleSection/TitleSection';
import Product from '../../components/templates/Product/Product';
import ContactFooter from '../../components/templates/ContactFooter/ContactFooter';

const Products = ({ products }) => {
  return (
    <>
      <TitleSection>Products</TitleSection>
      {products.map(item => (
        <Fade key={item.id} delay={300} duration={600}>
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
      <ContactFooter />
    </>
  );
};

const mapStateToProps = ({ firebaseReducer: { products } }) => {
  return {
    products
  };
};

export default connect(mapStateToProps)(Products);
