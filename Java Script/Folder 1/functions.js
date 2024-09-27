"use strict"
// task 1
function convert(input){
let elements=input.split(" "); // split 
return elements;
}

let result =convert("orange jordan");
console.log(result);

// in diifrenet way without function 
let v1="orange jordan"
let vv=v1.split()
console.log(vv)

//....................................
//task2 
function mask_tel_number(phoneNumber) {
    if (phoneNumber.length >= 10) {
        return "*******" + phoneNumber.slice(7)
    }
    return phoneNumber; 

}
let result1=mask_tel_number("0792865090");
console.log(result1);
//..........................
//task3
function maskemail(emailaddress){
    return "..." + emailaddress.slice( 15)
}
let result2 = maskemail("sultan.bassam08@gmail.com")
console.log(result2)

//task4
function flip_num(num){
    let flippednum = parseInt(num.toString().split("").reverse().join(""));
    return flippednum;
}
let inputnumber = 987345;
let outnumber = flip_num(inputnumber);
console.log(outnumber);
//TASK 4
 function swipenum(a,b){
    let temp = a;
    a = b;
    b = temp;
    return{a,b};
 }

 let resulta=swipenum( 5,3)
 console.log(resulta);
 //another way 
 function swipenum2(a,b){
    [a,b]=[b,a];
    return {a,b}

 }

let resultaa= swipenum2(10,9)
console.log(resultaa)


