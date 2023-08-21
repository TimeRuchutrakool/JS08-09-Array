const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

const summary = [];
sales.forEach((v) => {
  summary.push({ netprice: v.price * (1 - v.discount || 1) });
});
console.log(summary);
