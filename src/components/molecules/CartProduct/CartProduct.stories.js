import React from 'react';
import { action } from '@storybook/addon-actions';
import CartProduct from './CartProduct';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Cart Product',
  component: CartProduct
};

addDecorator(withKnobs);

export const Product = () => (
  <CartProduct
    imageURL={
      'https://images.pexels.com/photos/2069428/pexels-photo-2069428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
    name={'Succulent plant'}
    pack={'Basic pack'}
    addition={'With ceramic pots'}
    quantity={2}
    totalPrice={178.99}
  >
    hello
  </CartProduct>
);
