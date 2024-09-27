let str="Welcome to Orange"
 
// first conver all leters to uppercase
let upperCase_str = str.toUpperCase();
console.log(upperCase_str);

// just print after slices letter 8 and 9
let wordTO = str.slice(8,10)
console.log(wordTO);

// replacement idea
let replaced_Str= str.replace("Welcome to","Hello from");
console.log(replaced_Str);

//conver to lowerCase
let lowerCase_str =str.toLowerCase();
console.log(lowerCase_str);

//length of words
let Str_length =str.length
console.log(Str_length)
 
// add qoutes arround orange
let addqouts=str.replace("Orange","'Orange'")
console.log(addqouts);

//add word from exist words
let add_Str=str.concat(" ", "Jordan")
console.log(add_Str)


