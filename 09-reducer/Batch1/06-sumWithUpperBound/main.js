let str = "31 45 12 67 34 86 23 37 19 41";

const arr = str.split(" ");
const result = arr.reduce((acc, cur) => {
  const numCur = +cur;
  if (numCur <= 40) return acc + numCur;
  else return acc;
}, 0);

console.log(result);
