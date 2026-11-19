// Function that returns a value
function add(a, b) {
  return a + b;
}

// Store the result in a variable
let sum = add(5, 3);
console.log("5 + 3 =", sum);

// Use the result directly
console.log("10 + 20 =", add(10, 20));

// Function with multiple calculations
function calculate(x, y) {
  let sum = x + y;
  let product = x * y;
  return product; // Only the product is returned
}

console.log("Result:", calculate(4, 5));    