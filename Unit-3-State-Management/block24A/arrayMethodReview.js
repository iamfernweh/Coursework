const numsArray = [15,12,18,11,2,25];
const strArray = ['foo', 'bar', 'boo'];

//forEach
//should do something once for each item om the array
//define the callback inline
numsArray.forEach(num => {
    //console.log(num);
})

//defined the callback outside the method
const otherFunc = (x) => {
   // console.log(x);
}

//by defining the callback outside the foreach call we can reuse our callback functions and make them easier to modify in the future
numsArray.forEach(otherFunc);

//map
//should turn one array into another array with 1:1 relationship

function squaredNum(x) {
    return x * x;
}

console.log(numsArray.map(squaredNum));

//define map callback inline
console.log(strArray.map(function(x){
    return x * x;
}))