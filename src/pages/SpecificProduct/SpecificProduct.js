import React from 'react';
import ProductContent from '../../components/templates/ProductContent/ProductContent';
import ContactFooter from '../../components/templates/ContactFooter/ContactFooter';

const SpecificProduct = ({ match }) => {
  return (
    <>
      <ProductContent paramsId={match.params.id} />
      <ContactFooter />
    </>
  );
};

export default SpecificProduct;
