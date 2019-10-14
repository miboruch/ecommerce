import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from './Input';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Input',
  component: Input
};

addDecorator(withKnobs);

export const MainInput = () => <Input placeholder='hello' />;
export const SelectMenu = () => (
  <Input inputType={'select'} options={['first value', 'second value']} />
);
