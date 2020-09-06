import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import NumberBox from './index';

const stories = storiesOf('Components', module);

stories.add('Number Box', () => <NumberBox number={{number: number("Number", 1),multiple: boolean('Active', false)}} />, {
  info: {
    text: 'Basic number box.'
  },
});
