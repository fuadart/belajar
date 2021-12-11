const createPerson = function (person) {
  fs.writeFileSync("./person.json", JSON.stringify(person));
  return person;
};

const stephanie = createPerson({
  name: "stephanie",
  age: 21,
  address: "Bintaro",
});
