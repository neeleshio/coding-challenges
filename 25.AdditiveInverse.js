// Additive Inverse

// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

function additiveInverse(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(-(arr[i]))
    }
    return result
}

// <---------------------------------------------> //
// Method - 2
// Using built-in method map()
/* The map() method creates a new array with the results of calling a function for every array element. 
The map() method calls the provided function once for each element in an array, in order. */

function additiveInverse(arr) {
    return arr.map(x => -x)
}

//inputs
console.log(additiveInverse([5, -7, 8, 3])) // [-5, 7, -8, -3]
console.log(additiveInverse([1, 1, 1, 1, 1])) // [-1, -1, -1, -1, -1]
console.log(additiveInverse([-5, -25, 35])) // [5, 25, -35]