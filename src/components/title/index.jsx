import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: #333;
  font-size: 32px;
  font-family: 'Helvetica Neue, Segoe, Verdana, sans-serif';
`;

const Title = ({ title  }) => (
  <H1 data-testid="title">{ title }</H1>
);

export default Title;