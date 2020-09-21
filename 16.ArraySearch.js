//  Where is Bob!?!

// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array.
// If Bob is not in the array, return -1.

function findBob(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Bob") {
            return i
        }
    }
    return -1
}

// <-----------------------------------------------------------> //

// METHOD - 2
// using built-in method indexOf()

function findBob(arr) {
    return arr.indexOf("Bob")
}

// inputs
console.log(findBob(["Jimmy", "Layla", "Bob"])) // 2
console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"])) // 0
console.log(findBob(["Jimmy", "Layla", "James"])) // -1