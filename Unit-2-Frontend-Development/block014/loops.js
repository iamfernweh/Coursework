//basic loop

// for (let i = 0; i <= 10; i++) {
//     console.log(i);    
// }


// let fruit = ['blueberries', 'grapes', 'pineapple', 'mango', 'kiwi', 'apple'];

// for (let i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }


//Function with a loop
function evenNumsToN(n) {
    let evenNums = [];
        for(let i = 1; i < n; i++){
            if(i%2 === 0){
                evenNums.push(i)
            }
        }
    return evenNums;
}

console.log(evenNumsToN(100));