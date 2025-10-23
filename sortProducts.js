function sortProducts(products) {
    return products.sort((a, b) => a.price - b.price);
}
const products = [
    { name: "mouse", price: 5000 },
    { name: "phone", price: 50000 },
    { name: "laptop", price: 500000 }
];

const sorted = sortProducts(products);
console.log(sorted);