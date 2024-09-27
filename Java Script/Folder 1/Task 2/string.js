
let str = "cactus";

// Get the first letter of the string
let firstLetter = str[0];

// Use a regular expression to replace all occurrences of the first
// letter after the first one
let result = str[0] + str.slice(1).replaceAll(firstLetter, '*');

 console.log(result);  // Output: ca*tus

