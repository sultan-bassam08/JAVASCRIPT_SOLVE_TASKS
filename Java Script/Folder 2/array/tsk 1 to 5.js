"use strict"
let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3 = arr1.concat(arr2)
console.log(arr3)
//..................
let array =[1,2,3,4,5,6];

let firstpart =array.slice(0,2);
let secondpart = array.slice(4)
let result = firstpart.concat(secondpart);
console.log(result)
//.............
let removedelemnts = array.splice(3,2);

console.log(removedelemnts.length)
//..................

console.log(array.join(" "))
//...............
let arrray = [1,2,3,4,5]
arrray.push(6)
arrray.forEach(function(element){
    console.log(element)
    
});
