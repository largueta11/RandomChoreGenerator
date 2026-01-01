//---------- Array components

let people = ['Luis', 'Jessica', 'Eleanor'];

let actions = ['Dust', 'Sweep', 'Mop', 'Vacuum', 'Clean'];

let rooms = ['Kitchen', 'Dining Room', 'Living Room', 'Master Bedroom', 'Eleanors Bedroom', 'Playroom', 'Master Bathroom', 'Eleanors Bathroom', 'Half Bath', 'Master Closet', 'Eleanors Closet', 'Playroom Closet', 'Harry Potter Closet', 'Laundry Room', 'Garage'];

let recurrences = ['Day', 'Week', 'Month', 'Year'];

let intervals = [];

//---------- Functions

const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

const buildMessage = (p, a, r, rec) => {
    let person = getRandomElement(p);
    let action = getRandomElement(a);
    let room = getRandomElement(r);
    let recurrence = getRandomElement(rec);

    return `${person} will ${action} the ${room} every ${recurrence}.`;
}

//---------- Main code

console.log(buildMessage(people, actions, rooms, recurrences));