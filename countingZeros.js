function countZeros(n) {
  let count = 0;
  while (n > 0) {
    count += Math.floor(n / 10);
    n = Math.floor(n / 10);
  }
  return count;
}

console.log(countZeros(50));   
console.log(countZeros(100));
console.log(countZeros(200)); 
