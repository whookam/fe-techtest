import React from 'react';
import styled from 'styled-components';

const NumberWrapper = styled.div`
  display: inline-block;
  width: 30%;
  height: 250px;
  border-style: solid;
  border-width: 3px;
  border-color: ${props => props.theme.main.number.rootNumber ? '#FAF8B1' : '#333'};
  border-radius: 10px;
  box-shadow: 2px 2px 10px #999;
  font-family: 'Helvetica Neue, Segoe, Verdana, sans-serif';
  margin: 1%;
  text-align: center;
  line-height: 250px;
  font-size: 72px;
  background: ${props => props.theme.main.number.multiple ? '#B1E1FA': 'white'};

  &:hover {
    background: #FACACE;
    cursor: pointer;
  }

  &:active, &:focus {
    background: #FAF8B1;
  }

  @media only screen and (max-width: 768px) {
    width: 46%;
  }

  @media only screen and (max-width: 600px) {
    width: 98%;
    margin: 20px 0;
  }
`;


const Number = ({ number, showMultiple }) => (
  <NumberWrapper 
    onClick={() => showMultiple(number.number)} 
    theme={{ main: {number}}}
    data-testid="displayNumber"
  >{number.number}</NumberWrapper>
);

export default Number;
