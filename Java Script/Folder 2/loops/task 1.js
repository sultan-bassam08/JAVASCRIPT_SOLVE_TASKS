"use strict"
let number_Q1 = prompt("enter the number")
let total_Q1 = 1
for (let i = 0 ; i<number_Q1 ; i++){
    total_Q1 = total_Q1 * (number_Q1 - i);
}
console.log(total_Q1)