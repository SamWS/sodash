const compact = require('.');

describe('compact', () => {

  test('that all false values are removed', () => {
    const compactArr = [1, 2, 3];

    expect(compact([0, 1, false, 2, '', 3])).toEqual(compactArr);
  });

  test('that all values are removed if falsey', () => {
    expect(compact([false, '', undefined])).toEqual([]);
  });

  test('that no values are removed is all are truthy', () => {
    const truthArray = [1, 'sam', true];

    expect(compact(truthArray).length).toBe(3);
  })

});
