let numbers = [1, 2, 3, 4, 5];

// Find the index of an element
console.log("Index of 3:", numbers.indexOf(3));

// Check if array includes a value
console.log("Includes 4:", numbers.includes(4));
console.log("Includes 10:", numbers.includes(10));

// Join array into a string
let joined = numbers.join(", ");
console.log("Joined:", joined);

// Create a new array with a slice
let sliced = numbers.slice(1, 4); 
console.log("Sliced (1 to 4):", sliced);
console.log("Original:", numbers);