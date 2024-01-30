const numsArray = [42,50, 11, -20, .1]

const largestNum = numsArray.reduce((acc, curr) => {
    if (acc > curr){
        return acc
    } else {
        return curr
    }
})

console.log(numsArray);
console.log(largestNum);