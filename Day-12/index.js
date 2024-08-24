// Task 1: Add an element to an array using the `push()` method
let fruits = ['apple', 'banana', 'cherry'];
fruits.push('orange');
console.log('After push:', fruits); // Output: ['apple', 'banana', 'cherry', 'orange']

// Task 2: Remove the last element from an array using the `pop()` method
fruits.pop();
console.log('After pop:', fruits); // Output: ['apple', 'banana', 'cherry']

// Task 3: Remove the first element from an array using the `shift()` method
fruits.shift();
console.log('After shift:', fruits); // Output: ['banana', 'cherry']

// Task 4: Add an element to the beginning of an array using the `unshift()` method
fruits.unshift('orange');
console.log('After unshift:', fruits); // Output: ['orange', 'banana', 'cherry']

// Task 5: Modify an array by removing and/or adding elements using the `splice()` method
fruits.splice(1, 1, 'grape', 'melon');
console.log('After splice:', fruits); // Output: ['orange', 'grape', 'melon', 'cherry']

// Task 6: Create a new array from a portion of an existing array using the `slice()` method
let newFruits = fruits.slice(1, 3);
console.log('After slice:', newFruits); // Output: ['grape', 'melon']

// Task 7: Find the index of an element in an array using the `indexOf()` method
let index = fruits.indexOf('cherry');
console.log('Index of cherry:', index); // Output: 3

// Task 8: Create a new array by transforming each element in an existing array using the `map()` method
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(x => x * x);
console.log('After map (squared):', squaredNumbers); // Output: [1, 4, 9, 16]

// Task 9: Filter elements from an array that meet a certain condition using the `filter()` method
let evenNumbers = numbers.filter(x => x % 2 === 0);
console.log('After filter (even numbers):', evenNumbers); // Output: [2, 4]

// Task 10: Calculate a single value from an array using the `reduce()` method
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum using reduce:', sum); // Output: 10
