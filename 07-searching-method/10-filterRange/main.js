// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b

function filterRange(arr, a, b) {
  return arr.filter((v) => v >= a && v <= b);
}

const arr = [1, 2, 3, 4, 5, 6];
const a = 2;
const b = 4;
console.log(filterRange(arr, a, b));
