function oddSquares(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array of numbers");
  }

  return arr
    .filter(num => typeof num === "number" && num % 2 !== 0) 
    .map(num => num * num); 
}
console.log(oddSquares(4, 5, 7, 2, 9));
console.log(oddSquares(45, 64, 31, 97, 25));