import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Title from './index';

const stories = storiesOf('Components', module);

stories.add('Title', () => <Title title={text('Title', 'The Component title')} />, {
  info: {
    text: "A basic title component for the Which? Frontend tech test."
  }
});
