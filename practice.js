// Use a for loop to push the values 1 through 5 onto myArray.

const myArray = [];

for (i = 1; i < 6; i++) {
    myArray.push(i)
}

// Push the odd numbers from 1 through 9 to myArray using a for loop.

const myArray = [];

for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}

// Push the odd numbers from 9 through 1 to myArray using a for loop.

const myArray = [];

for (let i = 9; i > 0; i -= 2) {
  myArray.push(i)
  console.log(myArray)
}

// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

const myArr = [2, 3, 4, 5, 6];

let total = 0

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j]
      }
    }
  
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

  // Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.

  const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++
} while (i < 9) 

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    // Only change code below this line
  
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  
    // Only change code above this line
  }

  /* We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property. */

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if(contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return 'No such property'
      }
    }
  }
  return 'No such contact';

  // Only change code above this line
}

lookUpProfile("Akira", "likes");

// Change randomFraction to return a random number instead of returning 0.

function randomFraction() {

  // Only change code below this line
const random = Math.random();
  return random;

  // Only change code above this line
}

// Use this technique to generate and return a random whole number between 0 and 9.

function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

// Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

function convertToInteger(str) {
  return parseInt(str)
}

convertToInteger("56");

// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

//Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

function checkEqual(a, b) {
  return a === b ? 'Equal' : 'Not Equal'
}

checkEqual(1, 2);

// In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.

function checkSign(num) {
  return (num > 0) ? 'positive'
  : (num < 0) ? 'negative'
  : 'zero';
 }
 
 checkSign(10);

 // We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

 function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const myArr = countdown(n - 1);
    myArr.unshift(n);
    return myArr;
  }
  return;
}

// We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [endNum];
  } else {
    var nums = rangeOfNumbers(startNum, endNum - 1);
    nums.push(endNum);
    return nums;
  }
}

//

