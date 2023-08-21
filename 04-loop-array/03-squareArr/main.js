const arr = [2, 3, 5, 7, 11];

function squareArr(arr) {
  const squaredArr = [];
  arr.forEach((v) => squaredArr.push(v ** 2));
  return squaredArr;
}

console.log(squareArr(arr));
