import  { findRootNumber, getNumberList } from './helper';

describe('Helper function tests', () => {
  const stateList = [
    { number: 1, multiple: false, rootNumber: false },
    { number: 2, multiple: false, rootNumber: false },
    { number: 3, multiple: false, rootNumber: false },
    { number: 4, multiple: false, rootNumber: false },
    { number: 5, multiple: false, rootNumber: false },
    { number: 6, multiple: false, rootNumber: false },
    { number: 7, multiple: false, rootNumber: false },
    { number: 8, multiple: false, rootNumber: false },
    { number: 9, multiple: false, rootNumber: false },
    { number: 10, multiple: false, rootNumber: false },
  ]
  it('calculates the correct multiplation list for x2', () => {
    const selectedNumber = 2;
    const resolvedNumberList = getNumberList(stateList, selectedNumber);
    const expectedResult = [
      { number: 1, multiple: false, rootNumber: false },
      { number: 2, multiple: true, rootNumber: true },
      { number: 3, multiple: false, rootNumber: false },
      { number: 4, multiple: true, rootNumber: false },
      { number: 5, multiple: false, rootNumber: false },
      { number: 6, multiple: true, rootNumber: false },
      { number: 7, multiple: false, rootNumber: false },
      { number: 8, multiple: true, rootNumber: false },
      { number: 9, multiple: false, rootNumber: false },
      { number: 10, multiple: true, rootNumber: false },
    ]

    expect(resolvedNumberList).toEqual(expectedResult);
  });

  it('calculates the correct multipliation list ofr x3', () => {
    const selectedNumber = 3;
    const resolvedNumberList = getNumberList(stateList, selectedNumber);
    const expectedResult = [
      { number: 1, multiple: false, rootNumber: false },
      { number: 2, multiple: false, rootNumber: false },
      { number: 3, multiple: true, rootNumber: true },
      { number: 4, multiple: false, rootNumber: false },
      { number: 5, multiple: false, rootNumber: false },
      { number: 6, multiple: true, rootNumber: false },
      { number: 7, multiple: false, rootNumber: false },
      { number: 8, multiple: false, rootNumber: false },
      { number: 9, multiple: true, rootNumber: false },
      { number: 10, multiple: false, rootNumber: false },
    ]

    expect(resolvedNumberList).toEqual(expectedResult);
  });

  it('calculates the correct root number for the initial state', () => {
    const rootNumber = findRootNumber(stateList);

    expect(rootNumber).toEqual(false);
  });

  it('calculates the correct root number for a set state', () => {
    const activeState = [
      { number: 1, multiple: false, rootNumber: false },
      { number: 2, multiple: false, rootNumber: false },
      { number: 3, multiple: true, rootNumber: true },
      { number: 4, multiple: false, rootNumber: false },
      { number: 5, multiple: false, rootNumber: false },
      { number: 6, multiple: true, rootNumber: false },
      { number: 7, multiple: false, rootNumber: false },
      { number: 8, multiple: false, rootNumber: false },
      { number: 9, multiple: true, rootNumber: false },
      { number: 10, multiple: false, rootNumber: false },
    ];
    const rootNumber = findRootNumber(activeState);

    expect(rootNumber).toEqual(3);
  });
});