const extract = [{ names: "alice", age: 23, gender: "female" },
{ names: "aline", age: 43, gender: "female" },
{ names: "eric", age: 23, gender: "male" }
];
const names = extract.map((item) => item.names);
console.log(names)