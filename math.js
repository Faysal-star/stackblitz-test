// function rand(max, min) {
//   var num = Math.floor(Math.random() * (max - min + 1)) + min;
//   return num;
// }

// for (let i = 1; i <= 30; i++) {
//   console.log(rand(30, 40));
// }

// var a = 3;
// var b = 4;
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);

// Second Largest Number

/* var arr = [2, 3, 4, 5, 6, 12, 13, -1, 0];
var max = Math.max(...arr);
var idx = arr.indexOf(max);
arr.splice(idx, 1);

var max2 = Math.max(...arr);
console.log(max2); */

// All number add in array

function sum(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
}

var arr = [2, 3, 4, 5, 6, 12, 13, -1, 0];

console.log(sum(arr));
