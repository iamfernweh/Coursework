// let personName = "Grace Hopper";

// Older version of JS
// function sayHello() {
//     console.log('Hello there!');
//     console.log(`Nice to meet you ${personName}`);
// }

// ES6 Style
// const sayHello = () => {
//     console.log('Hello there!');
//     console.log(`Nice to meet you ${personName}`);
// }

// sayHello();
// personName = 'Bob';
// sayHello();

// // Parameter -> name
// function sayHello(name){
//     console.log(`Hello ${name}!`)
// };

// // Argument -> ‘Cody’
// sayHello('Cody');

// function sayHello(name){
//     return `Hello ${name}!`
// };

// const message = sayHello('Cody');

// console.log(message);

// const calSum = (num3, num4) => {
//     console.log(num3 + num4);
// };

// calcSum(10, 20);
// calcSum(2, 1);

// function calcSum(num1, num2) {
//     console.log(num1 + num2);
// }

// calcSum(8, 3);
// calcSum(23, 56);


const areaRectangle = (l, w) => {
    const area = l * w;
    return area;
}

console.log(`The area of my rectangle is: ${areaRectangle(10, 20)}`);