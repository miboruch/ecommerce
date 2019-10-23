import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TitleSection from '../../components/molecules/TitleSection/TitleSection';
import Product from '../../components/templates/Product/Product';
import ContactFooter from '../../components/templates/ContactFooter/ContactFooter';

const Products = ({ products }) => {
  return (
    <>
      <TitleSection>Products</TitleSection>
      {products.map(item => (
        <Link to={`/product/${item.id}`} key={item.id}>
          <Product
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
