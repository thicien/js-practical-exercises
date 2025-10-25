function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

person1.greet(); 
person2.greet(); 
