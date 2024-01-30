const priceNums = [1.99, 5.49, 60, 55.95];

//define a function to pass in as a parameter
const turnToString = (number) => `$${number}`

const stringNums = priceNums.map(turnToString)

console.log(stringNums);


//given an array of numbers, creation a function that return an array of squares of those numbers
const startNums = [1,2,3,4,5];
function squareTheNums(numsArray){
    return numsArray.map(num => num*num)
}
console.log(squareTheNums(startNums));