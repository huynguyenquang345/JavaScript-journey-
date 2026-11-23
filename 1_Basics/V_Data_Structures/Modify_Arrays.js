let numbers = [1, 2, 3];

// Change an element
numbers[1] = 20; 
console.log("After change:", numbers); 

// Add to the end
numbers.push(4);
console.log("After push:", numbers);

// Remove from the end
let removed  = numbers.pop();
console.log("Removed:", removed);
console.log("After pop:", numbers);

// Add to the beginning
numbers.unshift(0);
console.log("After unshift:", numbers);

// Remove from the beginning
let first = numbers.shift();
console.log("First removed:", first);
console.log("After shift:", numbers);