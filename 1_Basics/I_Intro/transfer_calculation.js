function double(n) {
console.log("double was called");
return n * 2;
}

const total = 5 + double(3);
console.log("total:", total);