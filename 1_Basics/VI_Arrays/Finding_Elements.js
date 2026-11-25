const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "editor" },
  { id: 3, name: "Carol", role: "viewer" },
  { id: 4, name: "Dan", role: "editor" },
];

const admin = users.find((user) => user.role === "admin");
console.log("Admin: ", admin.name);

const bobIndex = users.findIndex((user) => user.name === "Bob");
console.log("Bob is at index", bobIndex);

// Safe lookup — find returns undefined if not found

const missing = users.find((user) => user.id === 99);
console.log("Missing user: ", missing);
// 