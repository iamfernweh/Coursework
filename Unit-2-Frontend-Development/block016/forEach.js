// Define a function that takes another function (callback) as an argument
function greet(callback) {
    // Call the callback function
    callback();
  }
  
  // Define a callback function
  function sayHello() {
    console.log("Hello!");
  }
  
  // Call the greet function and pass the sayHello function as a callback
  greet(sayHello);
  