function getPoemTitle(authorUserSelected) { //authorUserSelected => "Sylvia Plath"

    let poemTitlesByAuthor = {
        "Robert Frost": "Stopping by Woods on a Snowy Evening",
        "Shel Silverstein": "Falling Up",
        "Sylvia Plath": "The Bell Jar"
    }

    return poemTitlesByAuthor[authorUserSelected]; //poemTitlesByAuthor["Sylvia Plath"]
}

console.log(getPoemTitle("Sylvia Plath"));

let states = {
    green: ["yellow"],
    yellow: ["red"],
    red: ["green", "yield"],
    yield: ["red"]
}

let currentState = "green";

function enterState(newState) {
    let validTransitions = states[currentState];

    if (validTransitions.includes(newState)) {
        currentState = newState;
        console.log("The current state is now " + currentState);
    } else {
        throw "Invalid state transition attempted - from " + currentState + " to " + newState;
    }
}

const fido = {
    name: 'fido',
    color: 'brown',
    describe: function () {
        return `Hello! My name is ${this.name} and I am ${this.color}`
    }
}

//Recommended!
console.log(fido.describe());

//Discouraged!
console.log(`Hello! My name is ${fido.name} and I am ${fido.color}`);