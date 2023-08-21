function checkEmptyObj(obj) {
  return Object.keys(obj).length === 0 ? true : false;
}

console.log(checkEmptyObj({}));
console.log(checkEmptyObj({ name: "a" }));
