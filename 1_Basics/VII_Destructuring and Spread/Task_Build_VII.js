const assert = require('assert');

// The data: a cart of line items from an API. Do NOT change this array.
const items = [
{ name: "Notebook", price: 4.99, qty: 3 },
{ name: "Pen Set", price: 9.99, qty: 1 },
{ name: "Desk Lamp", price: 34.99, qty: 2 },
];

// The store's defaults. Do NOT change this object.
const defaults = { currency: "USD", shipping: 5, gift: false };

// TODO 1: destructure name, price, and qty from each item and return a NEW
// array of line-total objects. Default qty to 1 if an item has no qty.
//   lineTotals(items) -> [ { name: "Notebook", total: 14.97 }, ... ]
function lineTotals(items) {
// your code here
    return items.map(({name, price, qty = 1}) => ({
        name, 
        total: Math.round(price * qty * 100) / 100, 
    }));
}

// TODO 2: merge the defaults with the given overrides using object spread, so
// overrides win. Do NOT mutate defaults.
//   withOverrides(defaults, { shipping: 0 }) -> { currency: "USD", shipping: 0, gift: false }
function withOverrides(defaults, overrides) {
// your code here
    return {...defaults, ...overrides};
}

// TODO 3: split the first item off the array with array destructuring and rest.
// Return an object with the first item's name and an array of the rest's names.
//   featured(items) -> { first: "Notebook", rest: ["Pen Set", "Desk Lamp"] }
function featured(items) {
// your code here
const [first, ...rest] = items;
    return {
        first: first.name,
        rest: rest.map(({name}) => name),
    }
}

// --- Build checks: these must all pass. Do not edit below this line. ---
assert.deepStrictEqual(
lineTotals(items),
[
	{ name: "Notebook", total: 14.97 },
	{ name: "Pen Set", total: 9.99 },
	{ name: "Desk Lamp", total: 69.98 },
],
"lineTotals(items) should destructure each item and return name + price*qty",
);
assert.deepStrictEqual(
withOverrides(defaults, { shipping: 0 }),
{ currency: "USD", shipping: 0, gift: false },
"withOverrides should spread-merge overrides over defaults, overrides winning",
);
assert.deepStrictEqual(
defaults,
{ currency: "USD", shipping: 5, gift: false },
"withOverrides must NOT mutate the original defaults object",
);
assert.deepStrictEqual(
featured(items),
{ first: "Notebook", rest: ["Pen Set", "Desk Lamp"] },
"featured should split the first item off with rest and return its name plus the others' names",
);

console.log("All checks passed.");
console.log("Line totals:", lineTotals(items));
console.log("With overrides:", withOverrides(defaults, { shipping: 0 }));
console.log("Featured:", featured(items));