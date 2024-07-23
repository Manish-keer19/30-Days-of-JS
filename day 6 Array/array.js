let arr = [1, 2, 3, 4, 5];
console.log(arr);

let ar = new Array(1, 2, 3, 4, 5);
console.log(ar);

console.log(arr[ar.length - 1]);
console.log(arr[0]);

// array methos basic

arr.push(20);
console.log(arr);
arr.pop();
console.log(arr);

let fistelem = arr.shift();
console.log(fistelem);
console.log(arr);

arr.unshift(1);
console.log(arr);

// array intermediate method:
// map method

let number = [1, 2, 3, 4, 5];
console.log(number);
let doubledNum = number.map((itme) => {
  return itme * 2;
});

console.log(doubledNum);

// fillter in js:

let num = [1, 2, 3, 33, 535, 437, 568, 9673, 35, 4, 90];

let evenNum = num.filter((elem) => {
  return elem % 2 == 0;
});
console.log(evenNum);

// reduse method in array:

let newNum = num.reduce((acc, cv) => {
  return acc + cv;
});
console.log(newNum);

// array iterations:

// for loop in array

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// foreach loop:

console.log("for each loop");
num.forEach((i) => {
  console.log(i);
});

// multidaimentional array:

let mulitArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [6, 7, 8, 9, 10],
];

console.log(mulitArr[0][0]);
console.log(mulitArr[1][4]);

console.log(mulitArr.length);

for (let i = 0; i < mulitArr.length; i++) {
  for (let j = 0; j < mulitArr[0].length; j++) {
    process.stdout.write(String(mulitArr[i][j]));
  }
  console.log();
}
