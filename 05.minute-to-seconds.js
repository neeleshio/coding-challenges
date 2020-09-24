// Write a function that takes an integer minutes and converts it to seconds.

function minToSeconds(min) {
    return `${min * 60} sec`
}

// inputs
console.log(minToSeconds(6)) // 360 sec
console.log(minToSeconds(60)) // 3600 sec
console.log(minToSeconds(666)) // 39960 sec