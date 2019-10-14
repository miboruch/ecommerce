import React from 'react';
import CartHeader from './CartHeader';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Cart',
  component: CartHeader
};

addDecorator(withKnobs);

export const CartTitle = () => <CartHeader />;
