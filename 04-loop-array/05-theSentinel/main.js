// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

const numbers = [];
let number = prompt("Number");

while (!isNaN(number) && number !== "" && number !== null) {
  numbers.push(+number);
  number = prompt("Number");
}

let sum = 0;
numbers.forEach((v) => (sum += v));

console.log(sum);
