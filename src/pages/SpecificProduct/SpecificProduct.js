import React, { useState, useEffect } from 'react';
import ProductContent from '../../components/templates/ProductContent/ProductContent';
import ContactFooter from '../../components/templates/ContactFooter/ContactFooter';
import Loader from '../../components/atoms/Loader/Loader';
import {connect} from 'react-redux';

const SpecificProduct = ({ match, products }) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    products.map(product => {
      if (product.id == match.params.id) {
        return setCurrentProduct(product);
      }
    });
    setLoading(false);
  }, [match.params.id]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <ProductContent productData={currentProduct} />
      <ContactFooter />
    </>
  );
};

const mapStateToProps = ({ firebaseReducer: { products } }) => {
  return { products };
};

export default connect(mapStateToProps)(SpecificProduct);
