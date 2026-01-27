const object1 = {
  name: "Sydwen X",
  age: 20,
  major: "Computer Science",
};

const object2 = {
  name: "Full Stack web application development",
  level: "intermediate studies",
  size: 5,
};

const object3 = {
  name: {
    first: "John",
    last: "Smiths",
  },
  grades: [2, 3, 5, 3],
  department: "Nanjing Normal University",
};

console.log(object1.name);
const fieldName = "age";
console.log(object1[fieldName]);

object1.address = "SuZhou";
console.log(object1);
object2["Test Test"] = "Test";
console.log(object2);
