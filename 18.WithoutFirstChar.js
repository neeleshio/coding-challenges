// Word without First Character

//Create a function that takes a word and returns the new word without including the first character.

function newWord(str) {
    let result = ""
    for (let i = 1; i < str.length; i++) {
        result += str[i]
    }
    return result
}

// <-----------------------------------------------> //
// Method - 2
// Using built-in method slice()

// The slice( ) method copies a given part of an array and returns that copied part as a new array. It doesn’t change the original array.
// slice(from, until);

function newWord(str) {
    return str.slice(1)
}

// <-------------------------------------> //
// Method - 3
// Using built-in method substr()

// substr() is used to return the part of the given string from start index to end index. 
// Indexing starts from zero (0).

function newWord(str) {
    return str.substr(1)
}

// inputs
console.log(newWord("apple")) // "pple"
console.log(newWord("cherry")) // "herry"
console.log(newWord("plum")) // "lum"
