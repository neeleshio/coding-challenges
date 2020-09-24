// Create a function that takes a number as its only argument and returns true if it's less than or equal to ZERO, otherwise return false.

function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        return true
    } else
        return false
}

// inputs
console.log(lessThanOrEqualToZero(1)) // false
console.log(lessThanOrEqualToZero(-1)) // true
console.log(lessThanOrEqualToZero(0)) // true