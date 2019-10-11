import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProductsContext = React.createContext([]);

const productURL = 'https://ecommerce-page.firebaseio.com/products.json';

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let result = await axios.get(productURL);

        let { aloe, fiveSucculent, leafed, succulent } = result.data.plants;
        setProducts([aloe, fiveSucculent, leafed, succulent]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};
export default ProductsContextProvider;
