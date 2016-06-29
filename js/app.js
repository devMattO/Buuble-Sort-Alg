'use strict';

var currentNum;
var nextNum;
var newArr = [];

// function compare( a, b ){
//     if( a < b ){
//       return -1;
//     } else if (a > b) {
//       return 1;
//     } else {
//       return 0;
//     }

//   }
var bubbleSort = function( input ){
  var flag = true;
  var counter = 0;
  while(flag === true){
    flag = false;
    for (var i = 0; i < input.length; i++) {
      currentNum = input[i];
      nextNum = input[i + 1];
      if( nextNum < currentNum ){
        input.splice(i, 2, nextNum, currentNum);
        flag = true;
      }
    }
  }
  console.log(input);
  return input;
};