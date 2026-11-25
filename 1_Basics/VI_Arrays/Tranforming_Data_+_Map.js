const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

// Build a new object per product, with a discounted price alongside the name
const discounted = products.map((product) => ({
  name: product.name,
  salePrice: (product.price * 0.9).toFixed(2) 
}));

console.log(discounted);