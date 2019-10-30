import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createOpacity } from '../../components/animations/animations';

import TitleSection from '../../components/molecules/TitleSection/TitleSection';
import Product from '../../components/templates/Product/Product';
import ContactFooter from '../../components/templates/ContactFooter/ContactFooter';

const Products = ({ products }) => {
  const fadeIn = createOpacity(1000, 2500)();
  return (
    <>
      <TitleSection>Products</TitleSection>
      {products.map(item => (
        <Link to={`/product/${item.id}`} key={item.id} style={fadeIn}>
          <Product
            style={fadeIn}
            key={item.id}
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

const mapStateToProps = ({ firebaseReducer: { products } }) => {
  return {
    products
  };
};

export default connect(mapStateToProps)(Products);
