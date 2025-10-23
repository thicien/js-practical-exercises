Array.prototype.myFilter = function (callbackFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) {
            result.push(this);
        } 
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const even = numbers.myFilter(num => num % 2 === 0);
console.log('myFilter', even);