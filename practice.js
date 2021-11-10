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

//