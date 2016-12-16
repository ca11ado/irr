require('../groupBy');

describe('test groupBy function', () => {
  it('first array', () => {
    const arr = [1,2,3,2,4,1,5,1,6];
    const expected = {
      0: [1,1,1],
      1: [2,2],
      2: [3],
      3: [4],
      4: [5],
      5: [6]
    };

    expect(
      arr.groupBy()
    )
    .toEqual(expected); 
  });    

  it('second array', () => {
    const arr = [1,2,3,2,4,1,5,1,6];
    const expected = {
      0: [3, 6],
      1: [1, 4, 1, 1],
      2: [2, 2, 5]
    };
    const callback = (val) => val % 3;

    expect(
      arr.groupBy(callback)
    )
    .toEqual(expected); 
  });    

  it('third array', () => {
    const arr = [1,2,3,2,4,1,5,1,6];
    const expected = {
      0: [2, 2, 4, 6],
      1: [1, 3, 1, 5, 1]
    };
    const callback = (val) => val % 2;

    expect(
      arr.groupBy(callback)
    )
    .toEqual(expected); 
  });    

  it('four array with strings', () => {
    const arr = ['one', 'two', 'three', 'two'];
    const expected = {
      0: ['one'],
      1: ['two', 'two'],
      2: ['three']
    };

    expect(
      arr.groupBy()
    )
    .toEqual(expected); 
  });    
});
