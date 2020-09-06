import React from 'react';
import styled from 'styled-components';

const HeaderWapper = styled.header`
  margin: 20px 0;
`;

const Header = ({ children }) => (
  <HeaderWapper data-testid="header">
    { children }
  </HeaderWapper>
);

export default Header;
