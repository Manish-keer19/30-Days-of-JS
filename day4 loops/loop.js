// print number 1 to 10 :

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// print 5 multipication:
let n = 5;
console.log("printing 5 table..");
for (let i = 1; i <= 10; i++) {
  console.log(n * i);
}

// while loop

let i = 1;
var sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}

console.log("sum is " + sum);

// print number 10 to 1 using while loop:

let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// do while loop:

let number = 1;
do {
  console.log(number);
  number++;
} while (number <= 5);

// factorial using do while loop:

let num = 5;
i = num;
let factorial = 1;
do {
  factorial *= i;
  i--;
} while (i >= 1);

console.log(factorial);

// nested for loops:
n = 5;

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

// loop control statements:

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  } else {
    console.log(i);
  }
}

// break statement:
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  } else {
    console.log(i);
  }
}
