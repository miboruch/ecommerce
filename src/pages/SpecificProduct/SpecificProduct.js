import React, { useState, useEffect } from 'react';
import ProductContent from '../../components/templates/ProductContent/ProductContent';
import ContactFooter from '../../components/templates/ContactFooter/ContactFooter';
import Loader from '../../components/atoms/Loader/Loader';
import { connect } from 'react-redux';

const SpecificProduct = ({ match }) => {
  return (
    <>
      <ProductContent paramsId={match.params.id} />
      <ContactFooter />
    </>
  );
};

export default SpecificProduct;
