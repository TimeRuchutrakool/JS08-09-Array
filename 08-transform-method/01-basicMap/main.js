const array = [1, 2, 30, 400];
const result = array.map((item) => item * 2);
// result: [2, 4, 60, 800]

const array2 = [1, 2, 3, 4];
const result2 = array2.map((item) => `${item}`);
// result: ["1", "2", "3", "4"]

const array3 = [1, "1", 2, {}];
const result3 = array3.map((item) => typeof item);
// result: ["number", "string", "number", "object"]

const array4 = ["apple", "banana", "orange"];
const result4 = array4.map((item) => item.toUpperCase());
// result: ["APPLE", "BANANA", "ORANGE"]

const array5 = [1, 3, 4, 5, 6, 7, 8];
const result5 = array5.map((item) => (item % 2 === 0 ? "even" : "odd"));
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

const array6 = [1, -3, 2, 8, -4, 5];
const result6 = array6.map((item) => Math.abs(item));
// result: [1, 3, 2, 8, 4, 5]

const array7 = [100, 200.25, 300.84, 400.3];
const result7 = array7.map((item) => `${item.toFixed(2)}`);
// result: ["100.00", "200.25", "300.84", "400.30"]

const array8 = [0, 5, 10, 7, 6, 5, 0];
const result8 = array8.map((item) => {
  const date = new Date(`${item + 1}`);
  return date.toLocaleDateString("default", { month: "short" });
});
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const array9 = [1, 16, 81, 256, 625, 1296];
const result9 = array9.map((item) => Math.pow(item, 1 / 4));
// result: [1, 2, 3, 4, 5, 6]

const array10 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
const result10 = array10.map((item) => item.name);
// result: ["apple", "banana", "watermelon"]

const array11 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
const result11 = array11.map((item) => item.age);
// result: [14, 18, 32]

const array12 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
const result12 = array12.map((item) => `${item.name} ${item.age}`);
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]

const array13 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
const result13 = array13.map(
  (item) =>
    `${item.name} ${item.birth} ${Math.floor(
      (Date.now() - new Date(item.birth)) / (365 * 24 * 60 * 60 * 1000)
    )}`
);
console.log(result13); // from 2023
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]

const array14 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];
const result14 = array14.map((item) => {
  const date = new Date(item.birth);
  return `<tr><td>${item.name}</td><td>${date.toLocaleDateString("default", {
    day: "2-digit",
  })} ${date
    .toLocaleDateString("default", { month: "short" })
    .toLowerCase()} ${date.getFullYear()}</td></tr>`;
});
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
