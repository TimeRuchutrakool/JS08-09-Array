// จงสร้าง object โดยมี key เป็น id ของ product และ value เป็น product name

const products = [
  { id: 1, name: "Crystal" },
  { id: 4, name: "Namthip" },
  { id: 5, name: "Nestle" },
];
// { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };
const result = products.reduce((acc, cur) => {
  acc[cur.id] = { name: cur.name };
  return acc;
}, {});
console.log(result);
