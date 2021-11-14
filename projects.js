/* FIRST...Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2. */

function palindrome(str) {
    const alphaOnly = str
    .toLowerCase()
    .match(/[a-z0-9]/g);
    
    return alphaOnly.join('') === alphaOnly.reverse().join('');
  
  }
  
  palindrome("eye");

/* SECOND...Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
    const lookupTable = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
  
    let accumulator = '';
  
    for (const key in lookupTable) {
      const numValue = lookupTable[key];
  
      while (numValue <= num) {
        num -= numValue;
        accumulator += key;
      }
    }
  
   return accumulator;
  }
  
  convertToRoman(36);

  /* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  function rot13(str) {
  
    let accumulator = '';
  
   for (let i = 0; i < str.length; i++) {
     const letter = alphabet.includes(str[i]);
     if (letter === false) {
       accumulator += str[i];
     } else {
       const index = alphabet.findIndex((c) => c === str[i]);
       accumulator += alphabet[index + 13] || alphabet[index - 13];
     }
   }
    return accumulator;
  }
  
  rot13("SERR PBQR PNZC");

  /* Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false. */

function telephoneCheck(str) {
  
  const validPatterns = [
    // 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,

    // 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,

    // 1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,

    // 5555555555
    /^\d{10}$/,

    // (555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}/,

    // 1 555 555 5555
    /^1 \d{3} \d{3} \d{4}/,

    // 1(555)555-5555
    /1\(\d{3}\)\d{3}-\d{4}/,
  ]
  
  return validPatterns
    .some((pattern) => pattern.test(str));
}

telephoneCheck("555-555-5555");

//


