"use strict"

// print the array 

// let placeIT=["Coading","Acadeamy","By","Orange"];
// console.log(placeIT)

//print first and last word coading and orange

// placeIT.splice(2)
// console.log(placeIT)

//print the array and in the first "Welcome","Orange"

// let placeIT2 =["Welome","TO"]
// let newarr= placeIT2.concat (placeIT)
// console.log(newarr)

//print array without coading

// placeIT.splice(0,1)
// console.log(placeIT)

//print all camelcase and no cotations

// let placeIT=["Coading","Acadeamy","By","Orange"];
//  let upper_str =placeIT.map(word=>word.toUpperCase()).join(" ");
// console.log(upper_str)

//print first and last letter 

// let PlaceIT=["Coading","Acadeamy","By","Orange"]
// PlaceIT.splice(1,2)
// console.log(PlaceIT)


function StrToArray(str){
    return str.split(" ");
}
 let input="Orange Coading"
 let output=StrToArray(input)

 console.log(output);
