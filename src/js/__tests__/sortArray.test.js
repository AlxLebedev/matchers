import sortArray from '../sortArray';

import characters from '../data';

// test('Array must be sortered from max to min', () => {
//   const expected = [
//     { name: 'маг', health: 100 },
//     { name: 'лучник', health: 80 },
//     { name: 'мечник', health: 10 },
//   ];

//   const recieved = sortArray(characters);

//   expect(recieved).toEqual(expected);
// });

test('Array must be sortered from max to min', () => {
  const recieved = sortArray(characters);

  function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i].health < arr[i + 1].health) {
        return false;
      }
    }
    return true;
  }

  expect(true).toEqual(isSorted(recieved));
});
