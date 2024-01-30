//write a function that takes an array of dog names, return an array of all the names that are 5 letters long or less.

const dogNamesArray = [
    'rex',
    'spot',
    'charlie',
    'buddy',
    'champion',
    'fiona'
]

function shortDogNames(array) {
    const shortEnoughNames = [];
    for (let i = 0; i < array.length; i++){
        if (array [i].length <= 5){
            shortEnoughNames.push(array[i])
        }
    }
    return shortEnoughNames
}

console.log(shortDogNames(dogNamesArray));

//review at each item in the array
//if string is 5 letters or less add it to the results array
//if it isn't bypass it
//return the results array