"use strict"
function checkEligibility(DOB){

    let currentYear = new Date().getFullYear();
    let age = currentYear - DOB
    if(age > 60){
        console.log("you may join the seniors program");
    }else if (age >30){
        console.log('you not are elgible.');
    }else if (age<18){
        console.log("you may join the kids program");
    }else if (age >=18 && age <=30){
        console.log("you are elgibile to join in our program")
    }
}

checkEligibility(1995);
checkEligibility(1980);
checkEligibility(2010);
checkEligibility(1945);

//task 2
function capslock(str){
    let result = " ";
    for(let i=0;i<str.length;i++){
        let char =str[i];
        if (char===char.toUpperCase()){
            result += char.toLowerCase();
        }else{
            result += char.toUpperCase();
        }
    }
    return result
}
  let input ="OrAnGe";
  let output =capslock(input)
  console.log(output);

  //task3
  function camelcase (str){
    let words =str.split (' ');
    for(let i = 0;i<words.length; i++){
        words[i]= words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join('')
  }
  let input1= "coding academy by orange";
  let output1= camelcase (input1);
  console.log(output1);