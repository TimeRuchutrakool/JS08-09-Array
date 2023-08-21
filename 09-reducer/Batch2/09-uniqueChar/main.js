// จงหา unique array element ของ alphabets

let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// expected result: ['a', 'b', 'c', 'e', 'd']
const result = Array.from(new Set(alphabets));
console.log(result);
