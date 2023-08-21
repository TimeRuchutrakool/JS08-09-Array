// จงนับชื่อที่ปรากฏใน names

let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
const result = names.reduce((acc, cur) => {
  if (!acc[cur]) {
    acc[cur] = 1;
    return acc;
  } else {
    acc[cur] += 1;
    return acc;
  }
}, {});
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

console.log(result);
