// The abs() function returns the absolute value of a number. 
// This means that it returns a number's positive value. You can think of it as the distance away from zero.

// Create a function that recreates this functionality.

function absoluteValue(num) {
    if (num < 0) {
        return -num
    } else
        return num
}

// inputs
console.log(absoluteValue(-5)) // 5
console.log(absoluteValue(0)) // 0
console.log(absoluteValue(4)) // 4