function transformKeys(obj, transformFn) {
  const result = {}; 
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
         const newKey = transformFn(key); 
         result[newKey] = obj[key]; 
        }
    }
  
  return result; 
}

const inputObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const transformFunction = (key) => key.toUpperCase();

const transformedObject = transformKeys(inputObject, transformFunction);
console.log(transformedObject);
