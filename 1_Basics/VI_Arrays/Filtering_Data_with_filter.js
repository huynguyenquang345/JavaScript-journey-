const scores = [10, 20, 30, 40, 50];

const passing = scores.filter((score) => score >= 30);
const failing = scores.filter((score) => score < 30);

console.log("PASSING SCORES:", passing); 
console.log("FAILING SCORES:", failing);
console.log("Pass rate", `${Math.round((passing.length / scores.length) * 100)}%`);