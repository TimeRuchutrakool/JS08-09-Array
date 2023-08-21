// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

function clone(arr) {
  return arr.slice();
}

const a = [1, 2, 3];
console.log(clone(a));
