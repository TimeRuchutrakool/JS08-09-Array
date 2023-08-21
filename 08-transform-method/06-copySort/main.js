let arr = ["React", "Vue", "Angular"];
let sorted = copySorted(arr);

function copySorted(arr) {
  const arrCloned = [...arr];
  arrCloned.sort();
  return arrCloned;
}

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)
