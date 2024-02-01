const person = {
    name: "Sally",
    sayHi: () => {
      console.log(this.name);
    },
  };
  
  person.sayHi();


  class Sneaker {
    constructor(price) {
      this.price = price;
    }
    isExpensive() {
      return this.price > 100;
    }
  }
  
  const mySneaker = new Sneaker(120);
  console.log(mySneaker.isExpensive());