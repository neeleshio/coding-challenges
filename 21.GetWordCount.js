// Get Word Count

// Create a function that takes a string and returns the word count. The string will be a sentence.

function getWordCount(str) {
    return str.split(" ").length
}

//inputs
console.log(getWordCount("Just an example here move along")) // 6
console.log(getWordCount("This is a test")) // 4
console.log(getWordCount("What an easy task, right")) // 5