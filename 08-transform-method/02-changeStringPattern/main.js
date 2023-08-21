function toCamelCase(str) {
  const sepByDashed = str
    .split("-")
    .map((item, index) =>
      index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
  return sepByDashed;
}

console.log(toCamelCase("background-color"));
