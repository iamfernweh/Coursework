//Declare an object named dinner that uses the purchased 
//food as the keys and the price of the food for the values.

let dinner = {
    hamburger: 12,
    steak: 20,
    soup: 8,
    macAndCheese: 14,
    soupAndSalad: 16,
};

//List all of the different foods that were eaten during the dinner.
//List the prices of the meals eaten during the dinner.
console.log(Object.keys(dinner));
console.log(Object.values(dinner));

// Using what we know about objects, 
// add the values of the dinner object to calculate the 
// total cost of the meal. 

let prices = Object.values(dinner);
let totalCost = 0;

for (let i = 0; i < prices.length; i++){
    totalCost += prices[i];
}

console.log(totalCost);

//Using what we know about objects, 
//add the values of the dinner object to calculate 
//the total cost of the meal. 

function calculateCost(meal) {
    let total = 0;
    for (let food in meal){
        total += meal[food];
    }
    return total;
}