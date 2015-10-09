
module.exports = {

  bookData: function(inputArr){
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

}

// OR

// module.exports = function(inputArr){
//       var resultObj = {};
//       for (var i = 0; i < inputArr.length; i++){
//           resultObj[inputArr[i][2]] = {};
//           resultObj[inputArr[i][2]]['title'] = inputArr[i][0];
//           resultObj[inputArr[i][2]]['author'] = inputArr[i][1];
//           resultObj[inputArr[i][2]]['isbn10'] = inputArr[i][2];
//       }
//       return resultObj
//   }

