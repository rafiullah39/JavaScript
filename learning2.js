const userString = prompt("Enter a string:");

const userChar = prompt("Enter a character to count:");


if (!userString || !userChar || userChar.length !== 1) {
    alert("Invalid input! Please provide a valid string and a single character.");
} else {
    let count = 0;
    for (let char of userString) {
        if (char === userChar) {
            count++;
        }
    }

    
    alert(`The character '${userChar}' appears ${count} time(s) in the string.`);
}
