const animals = ["Dog", "Cat", "Rat"];

// ค่อนข้าง Imperative
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// for in (มอง array เป็น object ประเภทหนึ่งได้) ถ้าไม่มี key ก็จะให้ key เป็น index ถ้าเป็น array

// const arr = {
//   0: "Bird",
//   1: "Cat",
//   2: "Dog",
// };
animals = ["Dog", "Cat", "Rat"];
for (const index in animals) {
  console.log(index, animals[index]);
}

for (const element of animals) {
  console.log(element);
}

animals = ["Dog", "Cat", "Rat"];
// callback จะถูก run ตามจำนวนสมาชิกใน array
animals.forEach((v, i) => {
  console.log(i, v);
});
function myFunc() {
  console.log("Hi");
}
animals.forEach(myFunc);
