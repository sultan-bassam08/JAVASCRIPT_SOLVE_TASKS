"use strict"
function fibonacciSequence(limit) {
    let a = 0, b = 1;
    console.log(a);  // Print the first number
    
    for (let i = 1; b <= limit; i++) {
      console.log(b);  // Print the next number in the sequence
      let next = a + b;
      a = b;
      b = next;
    }
  }
  
  // Example usage
  const input = 10;
  fibonacciSequence(input);  // Output: 0 1 1 2 3 5 8
  