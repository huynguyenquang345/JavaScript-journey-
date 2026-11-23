let fruits = ["apple", "banana", "orange"];

// For loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ":", fruits[i]);
}

// For...of loop (modern way)
console.log("\nUsing for...of:");
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach method
console.log("\nUsing forEach:");
fruits.forEach(function(fruit, index) {
  console.log(index + ":", fruit);
});