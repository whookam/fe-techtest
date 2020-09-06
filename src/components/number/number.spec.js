import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render} from '@testing-library/react';
import 'jest-styled-components';

import NumberBox from './index';

describe('Number box component', () => {
  const { getByTestId } = render(<NumberBox number={{number: 10, multiple: false}} />);

  it('displays the correct content when given 10 as a number', () => {
    const displayNumnber = getByTestId('displayNumber');
    expect(displayNumnber.innerHTML).toEqual("10");
  });

  test('Render snapshot test of the numberBox component', () => {
    const renderedNumberBox =  TestRenderer.create(<NumberBox number={{number: 10, multiple: false}} />).toJSON();
    expect(renderedNumberBox).toMatchSnapshot();
  });

  test('it renderes the correct CSS styles for the NumberBox component when inactive', () => {
    const { getByTestId } = render(<NumberBox number={{number: 15, multiple: false, rootNumber: false}} />);
    const content = getByTestId('displayNumber');
    expect(content).toHaveStyleRule('background', 'white');
    expect(content).toHaveStyleRule('border-color', '#333');
  });

  test('it renderes the correct CSS styles for the NumberBox component when active', () => {
    const { getByTestId } = render(<NumberBox number={{number: 10, multiple: true, rootNumber: false}} />);
    const content = getByTestId('displayNumber');
    expect(content).toHaveStyleRule('background', 'lightblue');
    expect(content).toHaveStyleRule('border-color', '#333');
  });
  
  test('it renderes the correct CSS styles for the NumberBox component when the root number', () => {
    const { getByTestId } = render(<NumberBox number={{number: 4, multiple: true, rootNumber: true}} />);
    const content = getByTestId('displayNumber');
    expect(content).toHaveStyleRule('background', 'lightblue');
    expect(content).toHaveStyleRule('border-color', 'yellow');
  });

});
