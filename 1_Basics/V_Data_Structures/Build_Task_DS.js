const assert = require('assert');

// The data: a class roster. Do NOT change this array.
const students = [
{ name: "Alice", city: "Boston", grade: 91 },
{ name: "Bob", city: "Boston", grade: 78 },
{ name: "Carol", city: "Denver", grade: 84 },
{ name: "Dan", city: "Denver", grade: 88 },
{ name: "Eve", city: "Boston", grade: 72 },
];

// TODO 1: return a NEW array of just the names, in order.
//   names(students) -> ["Alice", "Bob", "Carol", "Dan", "Eve"]
function names(students) { 
    // new array to hold names
    let namesArray = [];
    // loop through students array
    for (let i = 0; i < students.length; i++) {
        // push each name into namesArray
        namesArray.push(students[i].name);
    }
    return namesArray;
}

// TODO 2: return the class average grade as a number.
//   averageGrade(students) -> 82.6
function averageGrade(students) {
    // initialize total variable
    let total = 0;
    // loop through students array
    for (let i = 0; i < students.length; i++) {
        // add each grade to total
        total += students[i].grade;
    }
    // calculate average
    let average = total / students.length;
    return average;
}

// TODO 3: return an object counting how many students are in each city.
//   countByCity(students) -> { Boston: 3, Denver: 2 }
function countByCity(students) {
    // initialize result object 
    let cityCount = {};
    // loop through students array
    for (let i = 0; i < students.length; i++) {
        let city = students[i].city;
        // if city is already a key in cityCount, increment its value
        if (cityCount[city]) {
            cityCount[city]++;
        } else {
            // if city is not a key, initialize it to 1
            cityCount[city] = 1;
        }
    }
    return cityCount;
}

// --- Build checks: these must all pass. Do not edit below this line. ---
assert.deepStrictEqual(
names(students),
["Alice", "Bob", "Carol", "Dan", "Eve"],
"names(students) should return an array of every student's name, in order",
);
assert.strictEqual(
averageGrade(students),
82.6,
"averageGrade(students) should return the mean of all grades (82.6)",
);
assert.deepStrictEqual(
countByCity(students),
{ Boston: 3, Denver: 2 },
"countByCity(students) should map each city to how many students live there",
);

console.log("All checks passed.");
console.log("Names:", names(students));
console.log("Average grade:", averageGrade(students));
console.log("By city:", countByCity(students));