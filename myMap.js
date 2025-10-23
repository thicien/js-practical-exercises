Array.prototype.myMap = function (callbackFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callbackFn(this[i], i, this));
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.myMap(num => num * 2);

console.log('myMap', doubled);






















































































































const numbers = [1, 2, 3, 4, 5];

// myMap
const doubled = numbers.myMap(num => num * 2);
console.log('myMap →', doubled); // [2, 4, 6, 8, 10]

// myFilter
const even = numbers.myFilter(num => num % 2 === 0);
console.log('myFilter →', even); // [2, 4]

// myReduce
const sum = numbers.myReduce((acc, num) => acc + num, 0);
console.log('myReduce →', sum); // 15

// myForEach
numbers.myForEach(num => console.log('myForEach →', num * 3));
// Output: 3, 6, 9, 12, 15




























// 1️⃣ myMap Implementation
Array.prototype.myMap = function(callbackFn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callbackFn(this[i], i, this)); // (element, index, array)
  }
  return result;
};

// 2️⃣ myFilter Implementation
Array.prototype.myFilter = function(callbackFn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) { // if condition is true
      result.push(this[i]);
    }
  }
  return result;
};

// 3️⃣ myReduce Implementation
Array.prototype.myReduce = function(callbackFn, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  // If no initial value is provided, use the first element
  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callbackFn(accumulator, this[i], i, this);
  }

  return accumulator;
};

// 4️⃣ myForEach Implementation
Array.prototype.myForEach = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    callbackFn(this[i], i, this);
  }
  // forEach doesn’t return anything
  return undefined;
};
