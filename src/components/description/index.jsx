import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  color: #333;
  font-size: 18px;
  font-family: 'Helvetica Neue, Segoe, Verdana, sans-serif';
`;

const Description = ({ children  }) => (
  <Paragraph>{ children }</Paragraph>
);

export default Description;