// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน

const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

const result = persons.reduce(
  (acc, cur) => {
    if (cur.sex === "M") {
      acc["M"].push(cur.name);
      return acc;
    } else {
      acc["F"].push(cur.name);
      return acc;
    }
  },
  { M: [], F: [] }
);
console.log(result);
