/**
 * Creating objects
 */

let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

console.log("Person:", person);

// Empty object
let empty = {};
console.log("Empty object:", empty);

/**
 * Accessing object properties 
*/

let person1 = {
    name1: "Bob",
    age1: 30,
    city1: "Los Angeles",
    isStudent: false
};

// Dot notation
console.log("Name:", person1.name1);
console.log("Age:", person1.age1);

// Bracket notation
console.log("City:", person1["city1"]);

// Bracket notation with variable
let property = "age1";
console.log("Dynamic property: ", person1[property]);

/**
 * Modifying objects
 */

let person2 = {
    name2: "Charlie",
    age2: 28
};

console.log("Original:", person2);

// Change a property
person2.age2 = 29;
console.log("After age change:", person2);

// Add a new property
person2.city2 = "Chicago";
console.log("After adding city:", person2);

// Delete a property
delete person2.age2;
console.log("After deleting age:", person2);

/**
 * Objects with methods
 */

let calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  }
};

console.log("5 + 3 =", calculator.add(5, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));
console.log("6 * 7 =", calculator.multiply(6, 7));

/**
 * Looping through objects
 */

let person3 = {
  name3: "Charlie",
  age3: 28,
  city3: "Chicago",
  occupation3: "Developer"
};

// For...in loop
console.log("Object properties:");
for (let key in person3) {
  console.log(key + ":", person3[key]);
}

// Get all keys
let keys = Object.keys(person3);
console.log("\nAll keys:", keys);

// Get all values
let values = Object.values(person3);
console.log("All values:", values);

/**
 * Arrays of objects
 */

// Array of objects
let students = [
  { name4: "Alice", grade: 85 },
  { name4: "Bob", grade: 92 },
  { name4: "Charlie", grade: 78 }
];

console.log("Students:");
for (let student of students) {
  console.log(student.name4 + " - Grade:", student.grade);
}

// Access specific student
console.log("\nFirst student:", students[0].name4);

// Calculate average grade
let total = 0;
for (let student of students) {
  total += student.grade;
}
let average = total / students.length;
console.log("Average grade:", average);

/**
 * Nested structures
 */

let school = {
  name5: "JavaScript High",
  students: ["Alice", "Bob", "Charlie"],
  location: {
    city: "Boston",
    state: "MA"
  }
};

console.log("School:", school.name5);
console.log("Students:", school.students);
console.log("City:", school.location.city);

// Loop through nested array
console.log("\nStudent list:");
for (let student of school.students) {
  console.log("- " + student);
}