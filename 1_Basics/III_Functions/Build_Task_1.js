const assert = require('assert');

// The data: rectangle dimensions to measure. Do NOT change this array.
const rectangles = [
{ label: "small", width: 5, height: 3 },
{ label: "wide", width: 10, height: 4 },
{ label: "square", width: 6, height: 6 },
];

// TODO 1: return the area of a rectangle (width times height).
//   area(5, 3) -> 15
function area(width, height) {
    return width * height;
}

// TODO 2: return the perimeter of a rectangle: 2 * (width + height).
//   perimeter(5, 3) -> 16
const perimeter = (width, height) => {
    return 2 * (width + height);
};

// TODO 3: return a label like "small: 15" — the tag, a colon, a space, then the value.
//   Give tag a default of "shape", so describe(15) uses "shape".
//   describe(15, "small") -> "small: 15"
//   describe(15) -> "shape: 15"
function describe(value, tag = "shape") {
    return `${tag}: ${value}`;
}

// --- Build checks: these must all pass. Do not edit below this line. ---
assert.strictEqual(
area(5, 3),
15,
"area(width, height) should return width times height",
);
assert.strictEqual(
perimeter(5, 3),
16,
"perimeter(width, height) should return 2 * (width + height)",
);
assert.strictEqual(
describe(15),
"shape: 15",
"describe(value) should default its tag to 'shape' when no tag is passed",
);
assert.strictEqual(
describe(15, "small"),
"small: 15",
"describe(value, tag) should join the tag and value as 'tag: value'",
);

console.log("All checks passed.");
console.log("Area 5x3:", area(5, 3));
console.log("Perimeter 5x3:", perimeter(5, 3));
console.log("Described:", describe(area(rectangles[0].width, rectangles[0].height), rectangles[0].label));