"use strict"
function print2DArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

print2DArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// console.log("4.Use a for loop to print the elements of a 2D array . ");