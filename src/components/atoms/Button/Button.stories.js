import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button
};

addDecorator(withKnobs);

export const CartButton = () => <Button>hello</Button>;
export const AddButton = () => <Button cart>+</Button>;
export const RemoveButton = () => <Button cart>-</Button>;
