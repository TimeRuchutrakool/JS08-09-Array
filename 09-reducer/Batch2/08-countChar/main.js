// จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str

let str = "I live in Thailand";
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

const result = str
  .toLowerCase()
  .replaceAll(" ", "")
  .split("")
  .reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
      return acc;
    } else {
      acc[cur] += 1;
      return acc;
    }
  }, {});

console.log(result);
