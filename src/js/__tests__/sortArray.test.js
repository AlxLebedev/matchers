import sortArray from '../sortArray';

import characters from '../data';

test('Array must be sortered from max to min', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const recieved = sortArray(characters);

  expect(recieved).toEqual(expected);
});
