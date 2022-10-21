"use strict";
// always use to avoid the errors
// it help us to find errors and makes code useful to run
// predefined words also cant be used here as a variable
let hasdriverslicence = false;
const passtest = true;

if (passtest) hasdriverslicence = true;

if (hasdriverslicence) console.log("i can drive");

// functions in js

// decleration of a function
function logger() {
  console.log("My name is saurabh");
}

// calling a function
logger();

logger();

function cutfruitpieces(fruit) {
  return fruit * 4;
}

function fruitprocerssor(apples, oranges) {
  const applepieces = cutfruitpieces(apples);
  const orangepieces = cutfruitpieces(oranges);

  console.log(apples, oranges);

  const juice = `Juice with ${applepieces} apples pieces and ${orangepieces} orange pieces.`;
  return juice;
}
// parameter are placeholders inn functions
console.log(fruitprocerssor(5, 0)); // arguments or actual parameters

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

// coding  question 1

const calcavg = (a, b, c) => (a + b + c) / 3;
console.log(calcavg(2, 3, 5));

const scoredolphins = calcavg(44, 23, 71);
const scorekoalas = calcavg(65, 54, 49);

// arrays in js

const friends = ["mike", "peter", "john"];
console.log(friends);

const years = new Array(1991, 1992, 1993);
// we can pass expressions in arrays as well

// unshift method is used to add elements in the
// starting of the array

///
friends.push("raj");
friends.unshift("ram");
// shift is used to remove the first element from
// the array
// objects in javascript this are used
// as a key value pairs
// which are used to
// store mutltiple things
// in a single objects
// as disscussed below

//we can use different types of functions as
//we want
// to call a function

const saurabh = {
  firstname: "saurabh",
  lastname: "tiwari",
  age: 22,
  occupation: "student",
  salary: 1000,
};
// so objets are often used in js
// as it helps in
// various ways
//
