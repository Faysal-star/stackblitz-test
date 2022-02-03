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

/* Object sort */

/* function objsort(obj) {
  let cheap = obj[0];
  for (const prime of obj) {
    if (cheap.price > prime.price) {
      cheap = prime;
    }
  }
  return cheap;
}

var obj = [
  { phone: 'Samsu', price: 2000 },
  { phone: 'Walton', price: 1000 },
  { phone: 'Xiaomi', price: 4000 },
  { phone: 'Oppo', price: 2060 },
  { phone: 'vivo', price: 2005 },
  { phone: 'Oneplus', price: 500 },
];

console.log(objsort(obj));
*/

/* Adding shopping cart cost */

/* function addObj(obj) {
  sum = 0;
  for (const item of obj) {
    sum = item.price * item.quantity + sum;
  }
  return sum;
}

var obj = [
  { phone: 'Samsu', price: 2000, quantity: 2 },
  { phone: 'Walton', price: 1000, quantity: 3 },
  { phone: 'Xiaomi', price: 4000, quantity: 12 },
  { phone: 'Oppo', price: 2060, quantity: 1 },
  { phone: 'vivo', price: 2005, quantity: 2 },
  { phone: 'Oneplus', price: 500, quantity: 2 },
];

console.log(addObj(obj));
*/

/* Jungle */

function animal(area, anperMile) {
  let leftarea = area % 10;
  let roundarea = area - leftarea;
  let sum = 0;
  let j = 0;
  for (let i = 0; i < area; i += 10, j++) {
    if (roundarea == 0) {
      sum = sum + leftarea * anperMile[j];
    } else {
      sum = sum + 10 * anperMile[j];
      roundarea -= 10;
    }
  }
  return sum;
}

var travel = 38;
var animalPerMile = [10, 20, 30, 40, 50];
console.log(animal(travel, animalPerMile));
