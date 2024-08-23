// String Concatenation:
// Question 1: String Concatenation
function getFullName(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    console.log(fullName);
}

// Example usage:
getFullName("John", "Doe");


// If-Else Statements:
// Question 2: If-Else Statements
function checkNumber(num) {
    if (num > 0) {
        console.log('Positive');
    } else if (num < 0) {
        console.log('Negative');
    } else {
        console.log('Zero');
    }
}

// Example usage:
checkNumber(5);    // Output: Positive
checkNumber(-3);   // Output: Negative
checkNumber(0);    // Output: Zero


// Question 3: Loops
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Question 5: Arrays
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log('Sum of array elements:', sum);
