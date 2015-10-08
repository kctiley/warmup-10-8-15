module.exports = {

  //Write a function that takes nested arrays and turns it into nested objects. If you solve it one way, then solve it another.
//-> {
//   "1934356360": {
//     "title": "Learn to Program",
//     "author": "Chris Pine",
//     "isbn10": 1934356360
//   },
//   "1593275846": {
//     "title": "Eloquent Javascript",
//     "author": "Marijn Haverbeke",
//     "isbn10": 1593275846
//   }
// }

//var books = [
// ["Learn to Program", "Chris Pine", 1934356360],
//  ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
]

var bookData = function(inputArr){
    var resultObj = {};
    var subObj = {};
    for (var i = 0; i < inputArr.length; i++){
        resultObj[inputArr[i][2]] = {};
        resultObj[inputArr[i][2]]['title'] = inputArr[i][0];
        resultObj[inputArr[i][2]]['author'] = inputArr[i][1];
        resultObj[inputArr[i][2]]['isbn10'] = inputArr[i][2];
    }
    return resultObj
}

//bookData(books)

}