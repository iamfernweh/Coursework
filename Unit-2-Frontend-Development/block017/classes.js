//JS Object
const dog1 = {
    //key: value,
    name: 'fiona',
    breed: 'corgi',
    age: 5,
    weight: 26,
    isGood: true
};

console.log(dog1);

//object.property
//console.log(`the dog's name is ${dog1.name} and its bread ${dog1.breed} and they are ${dog1.age} years old`);


for (const key in dog1) {
   //console.log(`${key} - ${dog1[key]}`);
}

//JS Classes

class Pet {
    //constructor is a special method that creates new objects & defines and initializes their properties
    constructor(name, species, age, numLegs, isMammal, sound) {
        //this new instance of a pet has a _ property = the _ parameter
        this.name = name;
        this.species = species;
        this.age = age;
        this.numLegs = numLegs;
        this.isMammal = isMammal;
        this.faveToys = [];
        this.sound = sound;
    }

    speak() {
        console.log(this.sound);
    }
    

}


const chance = new Pet('chance', 'bulldog', 5, 4, true, 'woo woo');
const sassy = new Pet('sassy', 'corgi', 7, 4, true, 'wan wan');
const shadow = new Pet('shadow', 'dachshund', 10, 4, true, 'nya nya');
//console.log(chance);

chance.speak();
sassy.speak();
shadow.speak();

const movieDogs = [
    new Pet('chance', 'bulldog', 5, 4, true, 'woof'),
    new Pet('sassy', 'corgi', 7, 4, true, 'wan wan'),
    new Pet('shadow', 'dachshund', 10, 4, true, 'nya nya')
]

// movieDogs.forEach((pet) => console.log(`${pet.name} is ${pet.age} years old`))
console.log('calling method on the array of Pets');
movieDogs.forEach((pet) => pet.speak())
