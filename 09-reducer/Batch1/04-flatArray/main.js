// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด

let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];
console.log(flattened.flat());
// expected result: [0, 1, 2, 3, 4, 5]
