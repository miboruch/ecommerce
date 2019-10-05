import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProductsContext = React.createContext([]);

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await axios.get(
        'https://ecommerce-page.firebaseio.com/products.json'
      );

      let { aloe, fiveSucculent, leafed, succulent } = result.data.plants;
      setProducts([aloe, fiveSucculent, leafed, succulent]);
    })();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextProvider;
