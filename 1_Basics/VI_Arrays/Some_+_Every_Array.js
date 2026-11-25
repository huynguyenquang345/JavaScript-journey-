const cart = [
  { name: "Notebook", price: 12, available: true },
  { name: "Pen Set", price: 8, available: true },
  { name: "Stapler", price: 15, available: false },
];

const anyUnavailable = cart.some((item) => !item.available);
const allAffordable = cart.every((item) => item.price < 20);
const allAvailable = cart.every((item) => item.available);

console.log("Any unavailable?", anyUnavailable);   // true
console.log("All affordable?", allAffordable);     // true
console.log("All available?", allAvailable);       // false

if (anyUnavailable) {
  const unavailable = cart.filter((item) => !item.available).map((i) => i.name);
  console.log("Out of stock:", unavailable.join(", "));
}