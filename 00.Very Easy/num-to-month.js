function monthName(num) {
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return months[num - 1]
}

console.log(monthName(3)) // "March"
console.log(monthName(12)) // "December"
console.log(monthName(6)) // "June"