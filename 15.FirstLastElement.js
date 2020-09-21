// Return the First and Last Elements in an Array   

// Create a function that takes an array of numbers and return the first and last elements as a new array.

function firstLastElement(arr) {
    return [arr[0], arr[arr.length - 1]]
}

// <--------------------------------------------> //

// Method -2
// using build-in methods shift() & pop()

function firstLastElement(arr) {
    return [arr.shift(), arr.pop()]
}

// inputs
console.log(firstLastElement([5, 10, 15, 20, 25])) // [5, 25]
console.log(firstLastElement(["edabit", 13, null, false, true])) // ["edabit", true]
console.log(firstLastElement([undefined, 4, "6", "hello", null])) // [undefined, null]

// shift() is used to remove the first element from an array
// pop() method is used to remove the last method from the array.
