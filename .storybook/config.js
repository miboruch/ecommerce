import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/assets/styles/theme';

configure(require.context('../src/components', true, /\.stories\.js$/), module);

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
