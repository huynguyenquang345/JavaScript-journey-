const assert = require('assert');

const products = [
{ name: "Keyboard", price: 79 },
{ name: "Mouse", price: 45 },
{ name: "Monitor", price: 320 },
];

const total = products.reduce((sum, product) => sum + product.price, 0);

assert.strictEqual(total, 444, 'expected 444, got ' + total);
console.log("Total: $" + total);