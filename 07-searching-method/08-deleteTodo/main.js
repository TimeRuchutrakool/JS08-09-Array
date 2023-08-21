const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function deleteTask(id) {
  const index = tasks.findIndex((v) => v.id === id);
  tasks.splice(index, 1);
}

deleteTask(1);
console.log(tasks);
