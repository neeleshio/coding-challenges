// Reverse an Array

// Write a function to reverse an array.

function reverseArray(arr) {
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result
}

// <----------------------------------------> //
// Method - 2
// Using built-in method reverse()

function reverseArray(arr) {
    return arr.reverse()
}

// inputs
console.log(reverseArray([1, 2, 3, 4])) // [4, 3, 2, 1]
console.log(reverseArray([9, 9, 2, 3, 4])) // [4, 3, 2, 9, 9]
console.log(reverseArray([])) // []