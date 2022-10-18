"use strict";
// it help us to find errors and makes code useful to run
// predefined words also cant be used here as a variable
let hasdriverslicence = false;
const passtest = true;

if (passtest) hasdriverlicence = true;

if (hasdriverslicence) console.log("i can drive");

// functions in js

// decleration of a function
function logger() {
  console.log("My name is saurabh");
}

// calling a function
logger();

logger();

function fruitprocerssor(apples, oranges) {
  console.log(apples, oranges);

  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
// parameter are placeholders inn functions
fruitprocerssor(5, 0); // arguments or actual parameters

const applejuice = fruitprocerssor(5, 0);

console.log(applejuice);

function calcage(birthyear) {
  return 2022 - birthyear;
}

const age1 = calcage(1999);

console.log(age1);

// fuction expression
const calcage2 = function (birthyear) {
  return 2022 - birthyear;
};
const age2 = calcage2(2000);

console.log(age1, age2);

// we can call a function before its defination
// but cant do the same in a function expression

// arrow functions

const calcage3 = (birthyear) => 2022 - birthyear;
const age3 = calcage3(1999);
console.log(age3);

const yearuntilretirement = (birthyear, firstname) => {
  const age = 2022 - birthyear;
  const retirement = 65 - age;
  return retirement;
};

// new 1
