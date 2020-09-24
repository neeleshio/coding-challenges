// Return Odd > Even

// Given an array, return true if there are more odd numbers than even numbers, otherwise return false.

function oddEven(arr) {
    let even = []
    let odd = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        } else
            odd.push(arr[i])
    }
    if (odd.length > even.length) {
        return true
    } else
        return false
}

// <-----------------------------------------> //
// Method - 2

function oddEven(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even++
        } else
            odd++
    }
    if (odd > even) {
        return true
    } else
        return false
}

console.log(oddEven([1, 2, 3, 4, 5, 6, 7, 8, 9])) // true
console.log(oddEven([1])) // true
console.log(oddEven([13452394823795273847528572346])) // false