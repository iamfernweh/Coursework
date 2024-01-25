// Imagine you're building a movie ticket pricing system. It should determine the price of a ticket based on a customer's age and the day of the week.
// Create two variables - one for age, another for day of the week.
// Calculate the price of a ticket using the following rules:
// Children under 2: free
// Children under 13: $5
// Adults 65 or older: $6
// All others: $8
// If it's Tuesday, apply a 50% discount to the ticket price.
// Print out a message to the user with their ticket price.
// Test your program with different ages and days of the week to ensure it calculates the correct ticket prices.

let age = 35;
let day = 'tuesday';
let price = 8;

if  (age < 2){
    let price = 0;
}
else if (age < 13) {
    price = 5;
}
else if (age >=65) {
    price = 6;
}

if (day === 'tuesday') {
    price *=0.5;
}

console.log(`Your ticket price will be $${price}`);