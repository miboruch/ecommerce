import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import TitleSection from './TitleSection';

addDecorator(withKnobs);

export default {
  title: 'Title section',
  component: TitleSection
};

export const Title = () => <TitleSection>our story</TitleSection>;
