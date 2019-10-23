import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../actions/firebaseAction';

const Orders = ({ token, userID, getOrders }) => {
  useEffect(() => {
    getOrders(token, userID);
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

const mapStateToProps = ({ authReducer: { token, userID } }) => {
  return { token, userID };
};

const mapDispatchToProps = dispatch => {
  return {
    getOrders: (token, id) => dispatch(fetchOrders(token, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
