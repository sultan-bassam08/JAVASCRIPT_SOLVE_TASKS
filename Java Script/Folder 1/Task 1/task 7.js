"use strict"
    function checkAge(age){

        if (age>18 && age<30){
            return true;        
    }
    else{
        return false;
    }
}

let age =20
let withinage =checkAge(age)
console.log(withinage)