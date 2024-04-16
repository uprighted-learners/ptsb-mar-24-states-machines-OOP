/*
    This is an example of using encapsulation.
    With encapsulation, we do NOT want to handpick the object's properties.
    Instead we want to create/use methods within our class to do actions
    such as adding, deleting, and retrieving.
*/

class FoodInventory {
    constructor() {
        this.bag = [];
    }

    // Add food item to our bag array.
    addFood(food) {
        this.bag.push(food);
    }

    // Remove food item to our bag array
    removeFood(food) {
        const foundFoodIndex = this.bag.findIndex(item => item === food);
        this.bag.splice(foundFoodIndex, 1);
    }

    // Return our bag array
    getFood() {
        return this.bag
    }

    // Print out the contents of our bag array
    lookAtBag() {
        if (this.bag.length === 0) {
            console.log("You have nothing in your bag!");
            return;
        }

        console.log("You have the following: ");
        for (let food of this.bag) {
            console.log(`You have ${food}`);
        }
    }
}

let myFood = new FoodInventory(); //Make new instance of our food inventory class. Doing this will setup our empty bag array
myFood.addFood("pizza"); //Add pizza to our bag
myFood.addFood("apple"); //Add apple to our bag
myFood.addFood("brownie"); //Add brownie to our bag
myFood.addFood("pancakes"); //Add pancakes to our bag
console.log(myFood.getFood()) //Print out our bag array
myFood.removeFood("apple"); //Remove apple from our bag
console.log(myFood.getFood()); //Print out our bag array

