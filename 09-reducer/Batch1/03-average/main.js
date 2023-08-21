// จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก;

const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];
// expected result: 89

const ave =
  scores.reduce((acc, cur) => acc + cur.score * cur.weight, 0) /
  scores.reduce((acc, cur) => acc + cur.weight, 0);
console.log(ave);
