/*
    With abstraction, we want to keep our logic and any new calculations
    within the class and make use of those class properties.

    In this example, we are using our properties to calculate for perimeter()
*/

class Rectangle {
    #height // private property. A private property is indicated with the # in front of a variable name
    #width // private property

    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }

    area() {
        return this.#height * this.#width
    }

    perimeter() {
        return (this.#height * 2) + (this.#width * 2)
    }

    setHeight(newHeight) {
        this.#height = newHeight;
    }

    getHeight() {
        return this.#height;
    }
}

const shape = new Rectangle(10, 8);

console.log(shape.perimeter());

shape.setHeight(20);
console.log(shape.getHeight())