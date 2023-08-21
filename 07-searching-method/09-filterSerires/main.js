// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

const array1 = [9, 17, 23, 5];
const result1 = array1.filter((v) => v > 10);
console.log(result1);
// ค่าที่มากกว่า 10

const array2 = [1, 2, 3, 4];
const result2 = array2.filter((v) => v % 2 !== 0);
console.log(result2);
// ค่าที่เป็นเลขคี่

const array3 = [1, "1", 2, {}];
const result3 = array3.filter((v) => typeof v === "number");
console.log(result3);
// ค่าที่ประเภทข้อมูลเป็น Number

const array4 = ["apple", "banana", "orange", "pineapple", "watermeon"];
const result4 = array4.filter((v) => v.length > 6);
console.log(result4);
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว

const array5 = [1, -3, 2, 8, -4, 5];
const result5 = array5.filter((v) => v > 0);
console.log(result5);
// ค่าที่เป็นเลขบวก

const array6 = [1, 3, 4, 5, 6, 7, 8];
const result6 = array6.filter((v) => v % 3 === 0);
console.log(result6);
// ค่าที่หาร 3 ลงตัว

const array7 = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];
const result7 = array7.filter((v) => v.startsWith("E"));
console.log(result7);
// ค่าที่ขึ้นต้นด้วยตัว E

const array8 = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];
const result8 = array8.filter((v) => v === v.toUpperCase());
console.log(result8);
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด

const array9 = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];
const result9 = array9.filter((v) => v.toLowerCase().includes("buri"));
console.log(result9);
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

const array10 = [
  { name: "Ben", age: 14 },
  { name: "Phil", age: 18 },
  { name: "John", age: 32 },
  { name: "Ann", age: 16 },
  { name: "Paul", age: 24 },
];
const result10 = array10.filter((v) => v.age >= 18);
console.log(result10);
// อายุไม่น้อยกว่า 18

const array11 = [
  { id: 1, name: "Pepsi" },
  { id: 2, name: "Mirinda" },
  { id: 3, name: "Coke" },
  { id: 4, name: "Fanta" },
  { id: 5, name: "Sprite" },
];
const result11 = array11.filter((v) => v.id !== 4);
console.log(result11);
// id ไม่เท่ากับ 4

const array12 = [
  { name: "John", birth: "2001-07-31" },
  { name: "Jack", birth: "1990-06-24" },
  { name: "Jim", birth: "1984-12-13" },
  { name: "Jeff", birth: "1996-02-05" },
  { name: "Joe", birth: "2002-06-13" },
];
const result12 = array12.filter((v) => {
  const date = new Date(v.birth);
  return date.getMonth() + 1 === 6;
});
console.log(result12);
// เกิดเดือน 6
