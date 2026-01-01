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

    if (action === 'Sweep') {
        while (room === 'Eleanors Bedroom' || room === 'Playroom' || room === 'Eleanors Closet' || room === 'Playroom Closet') {
            room = getRandomElement(r);
        }
    }
    else if (action === 'Mop') {
        while (room === 'Master Bedroom' || room === 'Eleanors Bedroom' || room === 'Master Closet' || room === 'Eleanors Closet' || room === 'Playroom Closet' || room === 'Garage' || room === 'Harry Potter Closet') {
            room = getRandomElement(r);
        }
    }
    else if (action === 'Vacuum') {
        while (room === 'Kitchen' || room === 'Dining Room' || room === 'Master Bedroom' || room === 'Master Bathroom' || room === 'Eleanors Bathroom' || room === 'Half Bath' || room === 'Master Closet' || room === 'Harry Potter Closet' || room === 'Laundry Room' || room === 'Garage') {
            room = getRandomElement(r);
        }
    }

    if (room === 'Eleanors Bedroom' || room === 'Eleanors Bathroom' || room === 'Eleanors Closet') {
        return `${person} will ${action} ${room} every ${recurrence}.`;
    }
    else {
        return `${person} will ${action} the ${room} every ${recurrence}.`;
    }
}

//---------- Main code

console.log(buildMessage(people, actions, rooms, recurrences));