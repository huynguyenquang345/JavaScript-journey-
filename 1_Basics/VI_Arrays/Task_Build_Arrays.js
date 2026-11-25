const assert = require('assert');

// The data: a task list for the manager service. Do NOT change this array.
const tasks = [
{ title: "Write spec", status: "done", priority: 3 },
{ title: "Review PR", status: "pending", priority: 5 },
{ title: "Fix bug", status: "pending", priority: 8 },
{ title: "Deploy", status: "done", priority: 2 },
{ title: "Update docs", status: "pending", priority: 4 },
];

// TODO 1: return a NEW array of the titles of only the pending tasks, in order.
//   pendingTitles(tasks) -> ["Review PR", "Fix bug", "Update docs"]
function pendingTitles(tasks) {
    return tasks.filter((task) => task.status === "pending").map((task.title))
}

// TODO 2: return the sum of every task's priority as a number.
//   totalPriority(tasks) -> 22
function totalPriority(tasks) {
    return tasks.reduce((total, task) => total + task.priority, 0);
}

// TODO 3: return true if ANY task has a priority of 8 or higher, else false.
//   hasUrgent(tasks) -> true
function hasUrgent(tasks) { 
    return tasks.some((task) => task.priority >= 8);
}

// --- Build checks: these must all pass. Do not edit below this line. ---
assert.deepStrictEqual(
pendingTitles(tasks),
["Review PR", "Fix bug", "Update docs"],
"pendingTitles(tasks) should filter to pending tasks and map them to their titles, in order",
);
assert.strictEqual(
totalPriority(tasks),
22,
"totalPriority(tasks) should reduce every task's priority into a single sum (22)",
);
assert.strictEqual(
hasUrgent(tasks),
true,
"hasUrgent(tasks) should return true when at least one task has priority >= 8",
);

console.log("All checks passed.");
console.log("Pending titles:", pendingTitles(tasks));
console.log("Total priority:", totalPriority(tasks));
console.log("Any urgent?", hasUrgent(tasks));