
const userInput = prompt("Enter a number:");

defaultNumber = Number(userInput);

if (isNaN(defaultNumber)) {
    alert("Invalid input! Please enter a numeric value.");
} else {
   
    if (defaultNumber > 0) {
        alert("The number is positive.");
    } else if (defaultNumber < 0) {
        alert("The number is negative.");
    } else {
        alert("The number is zero.");
    }
}
