"use strict"
console.log("even numbers using for loop")
for (let i =2; i<=50; i +=2){
    console.log(i)
}

// console.log("even numbers using while loop")
// let j = 2;
// while (j <=50){
   
//     console.log(j);
//      j =+ 2;
// }
//......................................
console.log("odd numbers using for loop")
for (let i =1; i<=50; i +=2){
    console.log(i)
}
//..........................
for (let i =1; i<= 100; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }
    if(i % 3 === 0){
        console.log("Fizz")

    }
    if(i % 5 === 0){
        console.log("Buzz")

    }else {
        console.log(i);
    }
}
//..........................
// Define the meal options
// const proteins = ['chicken', 'noodles', 'tofu', 'beef', 'fish', 'beans'];
// const grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
// const vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
// const beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
// const desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

// // Function to generate random unique meals
// function generateMeals(numMeals) {
//     const meals = new Set();  // Using a Set to ensure uniqueness of meals

//     // Helper function to generate a random index
//     // function getRandomIndex(arr) {
//     //     return Math.floor(Math.random() * arr.length);
//     // }

//     // Keep generating meals until we have the desired number of unique meals
//     while (meals.size < numMeals) {
//         const protein = proteins[getRandomIndex(proteins)];
//         const grain = grains[getRandomIndex(grains)];
//         const vegetable = vegetables[getRandomIndex(vegetables)];
//         const beverage = beverages[getRandomIndex(beverages)];
//         const dessert = desserts[getRandomIndex(desserts)];

//         // Create a meal string
//         const meal = "${protein}, ${grain}, ${vegetable}, ${beverage}, ${dessert}";

//         // Add to the Set to avoid duplicates
//         meals.add(meal);
//     }

//     // Convert the Set to an array and return the meals
//     // return Array.from(meals);
// }

// // Example usage: Generate 5 unique meals
// const numMeals = 5;
// const meals = generateMeals(numMeals);

// // Print out the meals
// console.log("Generated ${numMeals} unique meals:");
// meals.forEach((meal, index) => {
//     console.log("Meal ${index + 1}: ${meal}");
// });