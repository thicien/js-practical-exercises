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
