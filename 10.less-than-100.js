// Given two numbers, return true if the sum of the numbers is less than 100. Otherwise return false.

function lessThan100(x, y) {

    const sum = x + y;

    if (sum < 100) {
        return true
    } else
        return false
}

// inputs
console.log(lessThan100(20, 30)) // true
console.log(lessThan100(60, 90)) // false
console.log(lessThan100(50, 50)) // false