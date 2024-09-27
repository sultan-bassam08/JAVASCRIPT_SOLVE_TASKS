function printReverseArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);  // Print each element starting from the last one
    }
  }
  
  // Example usage
  const input = [1, 2, 3, 4, 5];
  printReverseArray(input);  // Output: 5 4 3 2 1
  