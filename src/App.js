import React, { useState } from 'react';
import styled from 'styled-components';

import NumberBox from './components/number';
import Header from './components/header';
import Title from './components/title';
import Description from './components/description';
import { findRootNumber, getNumberList } from './helpers/helper';

const initialState = [];
const endNumber = 144;

for(let runningNumber = 1; runningNumber <= endNumber; runningNumber++) {
  initialState.push({
      number: runningNumber,
      multiple: false,
      rootNumber: false
    });
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const NumberGrid = styled.section`
  margin: 40px 0;
`;

function App() {
  const [numberList, setNumberList] = useState(initialState);

  function setNumber(multiplicationNumber) {
    const selectedRootNumber = findRootNumber(numberList);
    if (selectedRootNumber === multiplicationNumber) {
      setNumberList(initialState);
      return;
    }

    const updatedNumberList = getNumberList(numberList, multiplicationNumber);
    setNumberList(updatedNumberList);
  }

  return (
    <Wrapper>
      <Header>       
        <Title title="Understanding Multiplication" />
        <Description>Click a number to see all the numbers that are multiples of the chosen number</Description>
      </Header>
      <NumberGrid>
        {numberList.map(number => <NumberBox key={number.number} number={number} showMultiple={setNumber} />
        )}
      </NumberGrid>
    </Wrapper>
  );
}

export default App;
