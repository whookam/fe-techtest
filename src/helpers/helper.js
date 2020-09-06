export const findRootNumber = (stateList) => {
  let rootNumber = false;
  stateList.forEach(item => {
    if (item.rootNumber) rootNumber = item.number
  });
  return rootNumber;
}
export const getNumberList = (stateList, selectedNumber) => {
  const newList = [];
  stateList.forEach(numberItem => {
    if (selectedNumber === numberItem.number) {
      newList.push({
        number: numberItem.number,
        multiple: true,
        rootNumber: true 
      })
    } else if (numberItem.number % selectedNumber === 0) {
      newList.push({
        number: numberItem.number,
        multiple: true,
        rootNumber: false
      });
    } else {
      newList.push({
        number: numberItem.number,
        multiple: false,
        rootNumber: false
      });
    }
  });
  return newList;
}