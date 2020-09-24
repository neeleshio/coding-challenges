// Given an object containing counts of both upvotes and downvotes,
// return what vote count should be displayed. 
// This is calculated by subtracting the number of downvotes from upvotes.

function voteCount(votes) {
    return votes.upvotes - votes.downvotes
}

// inputs
console.log(voteCount({ upvotes: 13, downvotes: 0 })) // 13
console.log(voteCount({ upvotes: 2, downvotes: 33 })) // -31
console.log(voteCount({ upvotes: 132, downvotes: 132 })) // 0