/*
    State machines example for rooms:
    Going from room to room

    Use the diagram provided to see the possible rooms
*/
let rooms = {
    room1: ["room2", "room3"], //Room 1 can go to room2 & room3
    room2: ["room1"], //From Room 2, you can only go back to room1. This is a dead end
    room3: ["room1", "room4"], //From Room 3, you can go back to room1 or go to room4
    room4: ["room3", "room5", "room6"], //From Room 4, you can go back to room3, go to room5 or go to room6
    room5: ["room4"], //From Room 5, you can only go back to room4. This is a dead end
    room6: ["room4"] //From Room 6, you can only go back to room4. This is a dead end
}

let currentRoom = "room1"; //Starting room

function enterRoom(newRoom) {
    let validNextRooms = rooms[currentRoom]; //Access the current room's array of valid next rooms
    
    if (validNextRooms.includes(newRoom)) { //Check if our new room is included within the array of valid next rooms
        //If so, then we want to:
        currentRoom = newRoom; //Update current room
        validNextRooms = rooms[currentRoom]; //Update new current room's list of valid next rooms
        console.log("The current room you're in now is " + currentRoom);

        //Print out the valid next rooms
        console.log("Your next available rooms are the following:");
        for (let room of validNextRooms) {
            console.log(room)
        }
    } else {
        // If the room we want to go to is not a valid next room, throw an error message
        throw "That's not an available room to enter from here"
    }
}

enterRoom("room2");
enterRoom("room1");