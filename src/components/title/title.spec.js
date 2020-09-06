import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Title from './index';

describe('Title Component', () => {
  const { getByTestId } = render(<Title title="Which? title component" />);

  it('displays the correct content when given a title to render', () => {
    const renderedTitle = getByTestId('title');
    expect(renderedTitle.innerHTML).toEqual('Which? title component');
  });

  test("Render snapshot test of the title component", () => {
    const renderedTitle = TestRenderer.create(<Title title="Snapshot title" />).toJSON();
    expect(renderedTitle).toMatchSnapshot();
  });
});
