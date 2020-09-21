/*Create a function that takes two numbers num1, num2, and an array arr and 
returns an array containing all the numbers in arr greater than num1 and less than num2.*/

function arrBetween(num1, num2, arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] > num1) && (arr[i] < num2)) {
            result.push(arr[i])
        }
    }
    return result
}

// inputs
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])) // [5, 4, 7]
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])) // [8, 6]
console.log(arrBetween(7, 32, [1, 2, 3, 78])) // []