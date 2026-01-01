//---------- Array components

let people = ['Luis', 'Jessica', 'Eleanor'];

let actions = ['Dust', 'Sweep', 'Mop', 'Vacuum', 'Clean'];

let rooms = ['Kitchen', 'Dining Room', 'Living Room', 'Master Bedroom', 'Eleanors Bedroom', 'Playroom', 'Master Bathroom', 'Eleanors Bathroom', 'Half Bath', 'Master Closet', 'Eleanors Closet', 'Playroom Closet', 'Harry Potter Closet', 'Laundry Room', 'Garage'];

let recurrences = ['Day', 'Week', 'Month', 'Year'];

const invalidRoomsByAction = {
  Sweep: [
    'Eleanors Bedroom',
    'Playroom',
    'Eleanors Closet',
    'Playroom Closet'
  ],
  Mop: [
    'Master Bedroom',
    'Eleanors Bedroom',
    'Master Closet',
    'Eleanors Closet',
    'Playroom Closet',
    'Garage',
    'Harry Potter Closet'
  ],
  Vacuum: [
    'Kitchen',
    'Dining Room',
    'Master Bedroom',
    'Master Bathroom',
    'Eleanors Bathroom',
    'Half Bath',
    'Master Closet',
    'Harry Potter Closet',
    'Laundry Room',
    'Garage'
  ]
};


//---------- Functions

const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

// buildMessage version 1.0
/*
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
*/

// buildMessage version 2.0

const buildMessage = (p, a, r, rec) => {
    let person = getRandomElement(p);
    let action = getRandomElement(a);
    let recurrence = getRandomElement(rec);

    const invalidRooms = invalidRoomsByAction[action] ?? [];
    const validRooms = r.filter(room => !invalidRooms.includes(room));

    let room = getRandomElement(validRooms);

    let needsThe = !room.startsWith('Eleanors');

    return `${person} will ${action} ${needsThe ? 'the ' : ''}${room} every ${recurrence}.`;
}

//---------- Main code

console.log(buildMessage(people, actions, rooms, recurrences));