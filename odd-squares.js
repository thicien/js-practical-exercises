function oddSquares(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("this must only have number only");
    }
    return arr
        .filter(num => typeof num && num % 2 !== 0)
        .map(num => num * num);
}
console.log(oddSquares(4, 5, 7, 2, 9));
console.log(oddSquares(45, 64, 31, 97, 25));