const animal = {
  speak: function () {
    console.log(`${this.name} makes a sound.`);
  }
};

const dog = Object.create(animal);
dog.name = "Buddy";
dog.bark = function () {
  console.log(`${this.name} barks!`);
};

dog.speak(); 
dog.bark(); 
