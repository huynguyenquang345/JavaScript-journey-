const inventory = [
    { name: "USB Hub", price: 25, inStock: true},
    { name: "Webcam", price: 89, inStock: false},
    { name: "Headset", price: 149, inStock: true},
    { name: "Desk Lamb", price: 39, inStock: true},
    { name: "Chair Mat", price: 35, inStock: false},
];

const availableExpensive = inventory
    .filter((item) => item.inStock && item.price > 40)
    .map((item) => item.name);

console.log("Available items over $40: ", availableExpensive);