function convertNullableVallues(obj) {
    for (const key in obj) {
        if (obj[key] === null) {
            obj[key] === 0;
        } else if (obj[key] === undefined) {
            obj[key] === "";
        }
        return obj;
  }  
}
 
const obj = {
    name: null,
    age: undefined,
    city: "kigali",
    score: 59
};
const solved = convertNullableVallues(obj);
console.log(obj);






