const assert = require('assert');

// The data: fixed inputs to check against. Do NOT change these values.
const limit = 15;
const childAge = 8;
const adultAge = 40;
const seniorAge = 70;

// TODO 1: return a word for one FizzBuzz number.
//   Divisible by 3 AND 5 -> "FizzBuzz"; by 3 only -> "Fizz";
//   by 5 only -> "Buzz"; otherwise the number as a string.
//   fizzbuzzWord(15) -> "FizzBuzz", fizzbuzzWord(9) -> "Fizz", fizzbuzzWord(7) -> "7"
function fizzbuzzWord(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n.toString();
    }
}

// TODO 2: count how many integers from 1 to limit are divisible by factor.
//   countDivisibleBy(15, 3) -> 5
function countDivisibleBy(limit, factor) {
    let count = 0;
    for (let i = 1; i <= limit; i++) {
        if (i % factor === 0) {
            count++;
        }
    }
    return count;
}

// TODO 3: return a ticket fare for an age.
//   Under 13 -> 5; 65 or older -> 8; everyone else -> 12.
//   fareFor(8) -> 5, fareFor(40) -> 12, fareFor(70) -> 8
function fareFor(age) {
    if (age < 13) {
        return 5;
    } else if (age >= 65) {
        return 8;
    } else {
        return 12;
    }
}

// --- Build checks: these must all pass. Do not edit below this line. ---
assert.strictEqual(
fizzbuzzWord(15),
"FizzBuzz",
"fizzbuzzWord(n) should return 'FizzBuzz' when n is divisible by both 3 and 5",
);
assert.strictEqual(
fizzbuzzWord(9),
"Fizz",
"fizzbuzzWord(n) should return 'Fizz' when n is divisible by 3 only",
);
assert.strictEqual(
fizzbuzzWord(10),
"Buzz",
"fizzbuzzWord(n) should return 'Buzz' when n is divisible by 5 only",
);
assert.strictEqual(
fizzbuzzWord(7),
"7",
"fizzbuzzWord(n) should return the number as a string when it is divisible by neither 3 nor 5",
);
assert.strictEqual(
countDivisibleBy(limit, 3),
5,
"countDivisibleBy(limit, factor) should count how many integers from 1 to limit divide evenly by factor",
);
assert.strictEqual(
fareFor(childAge),
5,
"fareFor(age) should charge 5 for anyone under 13",
);
assert.strictEqual(
fareFor(adultAge),
12,
"fareFor(age) should charge 12 for a standard adult",
);
assert.strictEqual(
fareFor(seniorAge),
8,
"fareFor(age) should charge 8 for anyone 65 or older",
);

console.log("All checks passed.");
console.log("fizzbuzzWord(15):", fizzbuzzWord(15));
console.log("countDivisibleBy(15, 3):", countDivisibleBy(limit, 3));
console.log("fareFor(70):", fareFor(seniorAge));