// const dogNamesArray = [
//     'rex',
//     'spot',
//     'charlie',
//     'buddy',
//     'champion',
//     'fiona'
// ]


// const firstShortName = dogNamesArray.find(dogName => {
//     if (dogName.length >=5){
//         return true
//     } else {
//         return false
//     }
// })

// console.log((firstShortName));

//find first gift on registry that fits within the budget

const giftRegistry = [
    {item: 'table', price: 25 },
    {item: 'plates', price: 10},
    {item: 'chairs', price: 45},
    {item: 'tv', price: 100},
    {item: 'radio', price: 5}
]

const minPrice = 1;
const maxPrice = 100;

const callbackForFindFn = (singleGift) => {
    return (singleGift.price > minPrice && singleGift.price < maxPrice)
}

const giftToBuy = giftRegistry.find(callbackForFindFn)

// console.log(giftToBuy);

const affordableGiftOptions = giftRegistry.filter(callbackForFindFn)
console.log(affordableGiftOptions);