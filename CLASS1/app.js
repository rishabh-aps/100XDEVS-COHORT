class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  static myType() {
    console.log("I am an animal");
  }
  speak() {
    console.log("Hi There! I'm " + this.name + ". " + this.speaks);
  }
}

let dog = new Animal("Moti", 4, "Bow-Wow");
dog.speak();
Animal.myType();
