const assert = require('assert');

// The data: a task list for the manager service. Do NOT change this array.
const tasks = [
    { title: "Write spec", status: "done", priority: 3 },
    { title: "Review PR", status: "pending", priority: 5 },
    { title: "Fix bug", status: "pending", priority: 8 },
    { title: "Deploy", status: "done", priority: 2 },
    { title: "Update docs", status: "pending", priority: 4 },
];

function pendingTitles(tasks) {
    return tasks.filter((task) => task.status === "pending").map((task) => task.title);
}

function totalPriority(tasks) {
    return tasks.reduce((total, task) => total + task.priority, 0);
}

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
