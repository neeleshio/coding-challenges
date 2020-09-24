/* Create a function that takes the number of wins, draws and losses 
and calculates the number of points a football team has obtained so far. */

// wins get 3 points
// draws get 1 point
// losses get 0 points

function scoreCalculate(wins, draws, losses) {
    return (wins * 3) + (draws * 1) + (losses * 0)
}

// inputs
console.log(scoreCalculate(3, 4, 5)) // 13
console.log(scoreCalculate(9, 8, 10)) // 35
console.log(scoreCalculate(0, 4, 5)) // 4