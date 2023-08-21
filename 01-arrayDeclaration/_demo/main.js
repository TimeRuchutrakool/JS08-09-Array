const f = ["A", "B", "C"];

console.log(f);

const height = new Array(155, 156, 158);
console.log(height);

console.log(f[0]);
console.log(f[1]);
console.log(f[2]);
console.log(f[-1]);
console.log(f[10]);

f[0] = "D";
console.log(f);

f[-1] = "E"; //พยายาม update ใน index ที่ไม่มีอยู่ -> Add
console.log(f);

delete f[2];
console.log(f);

const a = ["A", "B", "C"];
const b = a.entries();
// console.log(b);
// for (const i of b) {
//     console.log(i)
// }
const c = new Map(b);
console.log(c);
