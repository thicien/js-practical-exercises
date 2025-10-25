function convertToArray() {
  return Array.prototype.slice.call(this);
}

const arrayLikeObject = {0: 'a', 1: 'b', 2: 'c', length: 3};

const resultArray = convertToArray.apply(arrayLikeObject);
console.log(resultArray); 
