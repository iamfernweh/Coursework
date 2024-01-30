const object = {
    string: 'hi!',
    num: 42
}

console.log(object.string);
console.log(object['string']);

const keyVariable = 'string';
console.log(object[keyVariable]);

//update key value
object.string = 'hello, world!';
console.log(object.string);

//add new property
object.array = [];
object.array.push('some value');
console.log(object.array);

//declare an array
const myArray = [1,2,3];

//add to/remove from end of an array
myArray.push(4);
console.log(myArray);
const itemRemoved = myArray.pop();
console.log(itemRemoved);
console.log(myArray);

//unshift and shift, add/remove from beginning of array
myArray.unshift(0);
console.log(myArray);
myArray.shift();
console.log(myArray);