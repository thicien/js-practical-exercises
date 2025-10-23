Array.prototype.myReduce = function (callbackFn) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (accumulator === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }
    for (let i = 0; i < this.length; i++) {
        accumulator = callbackFn(accumulator, this[i], i, this);  
    }
    return accumulator;
}

const numbers = [1, 2, 3, 4, 5];
const reduced = numbers.myReduce((acc, num) => acc + num, 0);
console.log('myReduce', reduced);