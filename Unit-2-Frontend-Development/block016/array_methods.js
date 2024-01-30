const items = [
    { id: 1, name1: 'foo', price: 7},
    { id: 2, name1: 'bar', price: 6},
    { id: 3, name1: 'bazz', price: 9},
    { id: 4, name1: 'quq', price: 13},
    
]

const name1 = prompt(
    'enter a name of an item, we will try and find it', 
    'foo'
);

const found = items.find(item => item.name === name1);
if (found){
    console.log('we found it');
    console.log(found);
} else {
    console.log(`we could not find an with that name ${name1}`);
}

// ------

const search = prompt(
    'enter a string, we will see the items which have that sting in their name', 
    'ba'
);

const foundItems = items.filter(item => item.name1.indexOf(search) !== -1);
console.log(foundItems);

const keyForMapping = prompt(
    'choose a key, either id, name, or price so we we can use map to display the values for that key', 
    'price'
);

const mappedValues = items.map(item => [keyForMapping]);
console.log('mapped values', mappedValues);

const keyForReducing = prompt(
    'choose a key, either id, or price so we we can use reduce to sum up the values for that key', 
    'price'
);

const reduction = items.reduce((acc, item)=> {
    acc = acc + item[keyForReducing];
    return acc;
}, 0);
console.log(reduction);