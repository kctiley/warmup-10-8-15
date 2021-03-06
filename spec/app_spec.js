var myCode = require("../app");

describe('bookData', function() {
  it('takes nested arrays and turns it into nested objects', function() {
    expect(myCode.bookData([ ["Learn to Program", "Chris Pine", 1934356360],["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
      ])).toEqual({"1934356360": {"title": "Learn to Program","author": "Chris Pine","isbn10": 1934356360},"1593275846": {"title": "Eloquent Javascript", "author": "Marijn Haverbeke","isbn10": 1593275846}});
  });
});

// OR

// var bookData = require("../app");

// describe('bookData', function() {
//   it('takes nested arrays and turns it into nested objects', function() {
//     expect(bookData([ ["Learn to Program", "Chris Pine", 1934356360],["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
//       ])).toEqual({"1934356360": {"title": "Learn to Program","author": "Chris Pine","isbn10": 1934356360},"1593275846": {"title": "Eloquent Javascript", "author": "Marijn Haverbeke","isbn10": 1593275846}});
//   });
// });

