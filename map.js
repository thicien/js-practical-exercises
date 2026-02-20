const contents = [{ name: 'Alice', age: 30, gender: "female" },
{ name: 'Thicien', age: 22, gender: "male" },
{ name: "mary", age: 24, gender: "female" }
];
const names = contents.map((item) => item.name);
console.log(names);