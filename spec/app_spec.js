var myCode = require("../app");

describe('intersection', function() {
  it('returns an array of the common elements of two input arrays', function() {
    expect(intersection([1,2,3,4,5],[3,4,7,8,9])).toEqual([3,4]);
  });
});