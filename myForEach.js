Array.prototype.myForEach = function (callbackFn) {

    for (let i = 0; i < this.length; i++) {
        callbackFn(this[0], i, this)
    }
    return undefined;
}
const numbers = [1, 2, 3, 4, 5];
numbers.myForEach(num => console.log('myForEach', num * 3));
