import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withKnobs);
addDecorator(withA11y);

const req = require.context('../src/components', true, /\.stories\.js?$/);

function loadStories() {
  req.keys().forEach(filename => {
    console.log(`---- Loading stories for ${filename} ----`);
    return req(filename);
  });
}

configure(loadStories, module);
