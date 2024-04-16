/*
    Just like a parent to their child, we have inheritance.
    Classes can be parent and child classes.
    A child class can inherit properties + methods from its parent class.
    If a property/method is not mentioned in the child class but provided in the parent class, then the child class has access to it through its Parent class.
    As a child, you can overwrite the same method provided in the parent class. This is polymorphism.
*/

// Parent class aka super class
class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    sleep() {
        return `${this.name} is going to sleep ...`;
    }

    describe() {
        return `Hi there! I am ${this.name}, my color is ${this.color}`;
    }
}

// Child class aka sub class
class Dog extends Animal { //The extends keyword indicates that we are going to inherit from a specific class.
    // In this example, our child Dog class will inherit properties + methods from the parent Animal class

    constructor(name, color) {
        // supper calls the parent class constructor
        super(name, color)
    }

    // sleep() is omitted in this class but we still have access to it because it is provided within the parent class

    // describe() exists here and in our parent class. This describe() will overwrite the parent describe() method. This will be outputted
    // Polymorphism example
    describe() {
        return `A ${this.color} colored dog named ${this.name} says Woof!`
    }
}

const myDog = new Dog("Lucy", "brown");
console.log(myDog.sleep()); // This works. Sleep is coming from our Animal parent class.
console.log(myDog.describe()); // This works. Our child class has its own describe() method. This will use our child class' describe() method
