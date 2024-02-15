const nums = [1,2,3,4,5,6];

//one line syntax implicit return
const add = (x) => (y) => y + x 

//same function but with explicit return
const addition = (x) => {
    return (y) => {
        return x + y
    }
}

const addTen = add(10)// (y) => y + 10
console.log("original array", nums);
const arrayWithTenAdded = nums.map(addTen)
console.log('with ten added: ', arrayWithTenAdded);

//true "currying"
const result = add (5)(12);