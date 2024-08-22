// Basic Function:
function sayHello() {
    return "Hello, World!";
}


// Function with Parameters:
function doubleNumber(number) {
    return number * 2;
}


// Simple Return Function:
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}


// Arrow Function:
const doubleNumber = (number) => number * 2;


// Arithmetic Operator:

function subtractTen(number) {
    return number - 10;
}


// Comparison Operator:
function isGreaterThanFive(number) {
    return number > 5;
}


// Logical Operator:
function isBetweenOneAndTen(number) {
    return number >= 1 && number <= 10;
}


// If-Else Statement:
function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


// Ternary Operator:
function checkAge(age) {
    return age >= 18 ? "Adult" : "Minor";
}


// Switch Statement:
function getDayType(dayNumber) {
    switch(dayNumber) {
        case 6:
        case 7:
            return "Weekend";
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Weekday";
        default:
            return "Invalid day number";
    }
}