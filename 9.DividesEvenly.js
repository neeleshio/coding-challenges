// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

function dividesEvenly(a, b) {
    if (a % b === 0) {
        return true
    } else
        return false
}

// inputs
console.log(dividesEvenly(98, 7)) // true
// 98/7 = 14

console.log(dividesEvenly(85, 4)) // false
// 85/4 = 21.25