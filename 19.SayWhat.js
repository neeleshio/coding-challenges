// Given an object with always the exact same 3 keys, 
// return a string that concatenates all the values and adds the 2nd key at the end. 
// Make sure you keep an empty space between them but not at the beginning or end of the string.

/* Object.values() method is used to return an array whose elements are the enumerable property values found on the object. 
The ordering of the properties is the same as that given by the object manually is a loop is applied to the properties.*/

function sayWhat(obj) {
    return (Object.values(obj).join(" ").concat(` ${obj[2]}`))
}

// inputs
console.log(sayWhat({ 1: "Mommy", 2: "please", 3: "help" })) // "Mommy please help please"
console.log(sayWhat({ 1: "Me", 2: "innocent", 3: "is" })) // "Me innocent is innocent"
console.log(sayWhat({ 1: "Must", 2: "lawyer", 3: "call" })) // "Must lawyer call lawyer"

// join() -> joins all elemets of an array into a string
// concat() -> method is used to join two or more strings.
// split() -> splits string into an Array of string