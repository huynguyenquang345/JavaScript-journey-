const orders = [
    { id: 1, total: 45.99},
    { id: 2, total: 120.00},
    { id: 3, total: 8.50},
    { id: 4, total: 67.25},
];

// Sum all order totals
const grandTotal = orders.reduce((sum, order) => sum + order.total, 0);
console.log("Grand total: $" + grandTotal.toFixed(2));

// Group orders by whether they are over $50
const grouped = orders.reduce(
    (groups, order) => {
        const key = order.total >= 50 ? "large" : "small";
        groups[key].push(order);
        return groups;
    },
    { large: [], small: [] }
);


console.log("Large orders:", grouped.large.length);
console.log("Small orders:", grouped.small.length);