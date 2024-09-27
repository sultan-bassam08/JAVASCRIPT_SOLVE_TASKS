"use strict"
function printPrimes(limit) {
    for (let num = 2; num <= limit; num++) {
      let isPrime = true;
      
      // Check if num is divisible by any number between 2 and num-1
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;  // Exit loop if a divisor is found
        }
      }
  
      if (isPrime) {
        console.log(num);  // Print the number if it's prime
      }
    }
  }
  
  // Example usage
  const input = 20;
  printPrimes(input);  // Output: 2 3 5 7 11 13 17 19
  