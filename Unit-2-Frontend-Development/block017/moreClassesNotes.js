class Pet{
	//Constructor defines properties of a class
  constructor(type, sound){
    this.type = type;
	this.sound = sound;
  }
	//Every Pet can call greet()
  greet(){
    console.log(`Hi! I am a ${this.type}. The sound I make is ${this.sound}.`);
  }
}

const barry = new Pet('Barry', 'Woof');
barry.greet();
