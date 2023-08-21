const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function updateTask(id, newName) {
  const obj = tasks.find((v) => v.id === id);
  obj.name = newName;
}

updateTask(2, "Travelling");
console.log(tasks);
