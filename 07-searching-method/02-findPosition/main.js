const arr = [];
const alphabets = ["a", "b", "a", "c", "a", "d"];

for (let i = 0; i < alphabets.length; i++) {
  if (alphabets[i] === "a") arr.push(alphabets.indexOf("a", i));
}

console.log(arr);
