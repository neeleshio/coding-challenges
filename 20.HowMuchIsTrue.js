// How Much is True?

// Create a function which returns the number of TRUE values there are in an array.

function countTrue(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            count++
        }
    }
    return count
}

// <-----------------------------------------> //
// Method - 2
// Using built-in method filter()

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

function countTrue(arr) {
    return arr.filter(element => element).length
}

// inputs
console.log(countTrue([true, false, false, true, false])) // 2
console.log(countTrue([false, false, false, false])) // 0
console.log(countTrue([])) // 0