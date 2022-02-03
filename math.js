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

// function sum(a) {
//   var sum = 0;
//   for (var i = 0; i < a.length; i++) {
//     sum = sum + a[i];
//   }
//   return sum;
// }

// var arr = [2, 3, 4, 5, 6, 12, 13, -1, 0];

// console.log(sum(arr));

// Remove Duplicate

/* function removedup(arr) {
  // var i;
  // var j;
  // for (i = 0; i < arr.length; i++) {
  //   for (j = i + 1; j < arr.length; j++) {
  //     if (arr[i] == arr[j]) {
  //       arr.splice(j, 1);
  //     }
  //   }
  // }
  const uniq = [];
  for (const element of arr) {
    if (uniq.indexOf(element) == -1) {
      uniq.push(element);
    }
  }
  return uniq;
}

var arr = [
  'ami',
  'tumi',
  'se',
  'ami',
  'tumi',
  'se',
  'nai',
  'khai',
  'tumi',
  'je',
];
console.log(removedup(arr));
*/

// Reverse String
/* function rev(str) {
  let str2 = '';
  // for (let j = str.length - 1; j >= 0; j--) {
  //   str2 = str2 + str[j];
  // }
  for (const letter of str) {
    str2 = letter + str2;
  }
  return str2;
}

let str = 'hola amigoes';
console.log(rev(str));
*/
