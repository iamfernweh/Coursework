// Function to calculate ticket price
function ticketPrice(age, dayOfWeek) {
    let basePrice;
    
    // Determine base price based on age
    if (age < 2) {
        basePrice = 0; // Free for children under 2
    } else if (age < 13) {
        basePrice = 5; // $5 for children under 13
    } else if (age >= 65) {
        basePrice = 6; // $6 for adults 65 or older
    } else {
        basePrice = 8; // $8 for all others
    }
    
    // Apply discount if it's Tuesday
    if (dayOfWeek.toLowerCase() === 'tuesday') {
        basePrice *= 0.5; // 50% discount
    }
    
    return basePrice;
}

// Test cases
console.log("Ticket price for a 1-year-old on Tuesday:", ticketPrice(1, 'Tuesday')); // Expected output: 0 (Free)
console.log("Ticket price for a 10-year-old on Sunday:", ticketPrice(10, 'Sunday')); // Expected output: 5
console.log("Ticket price for a 30-year-old on Friday:", ticketPrice(30, 'Friday')); // Expected output: 8
console.log("Ticket price for a 70-year-old on Tuesday:", ticketPrice(70, 'Tuesday')); // Expected output: 3 (Discounted)
