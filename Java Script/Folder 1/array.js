"use strict"

// print the array 
 let placeIT=["Coading","Acadeamy","By","Orange"];
 console.log(placeIT)

//print first and last word coading and orange
let placeIT1=["Coading","Acadeamy","By","Orange"];
 placeIT1.splice(2)
 console.log(placeIT1)

//print the array and in the first "Welcome","Orange"
let placeIT2=["Coading","Acadeamy","By","Orange"];
 let placeIT3 =["Welome","TO"]
 let newarr= placeIT3.concat (placeIT2)
 console.log(newarr)

//print array without coading
let placeIT4=["Coading","Acadeamy","By","Orange"];
 placeIT4.splice(0,1)
 console.log(placeIT4)

//print all camelcase and no cotations

 let placeIT5=["Coading","Acadeamy","By","Orange"];
  let upper_str =placeIT5.map(word=>word.toUpperCase()).join(" ");
 console.log(upper_str)

//print first and last letter 

    let PlaceIT6=["Coading","Acadeamy","By","Orange"]
    PlaceIT6.splice(1,2)
    console.log(PlaceIT6)


    function StrToArray(str){
        return str.split(" ");
    }
    let input="Orange Coading"
    let output=StrToArray(input)

    console.log(output);
    

 //...................................................
 
 //2 array and opreations on it 
 let fruits0=["bannana","apple","orange","watermelon"]
 let vege=["carrot","tomato","pepper","lettuce"]
 vege.splice(3)
 console.log(vege)
fruits0.splice(0,1)
console.log(fruits0)
let fruits1=["bannana","apple","orange","watermelon"]
let index=fruits1.indexOf("orange")
console.log(index)
let num=99
let fruitwith_num=fruits1.concat(num)
console.log(fruitwith_num)
let vege1=["carrot","tomato","pepper","lettuce"]
 let lengthofarrayvege =vege1.length;
console.log(lengthofarrayvege)
console.log(vege1[0]);
let food=fruits1.concat(vege1)
console.log(food)
food.splice(4,2);
console.log(food)

let foodrevers = food.reverse().join(" ")
console.log(foodrevers)

