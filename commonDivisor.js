function gcd(a, b) {
  while (b !== 0) {
    let great = b;
    b = a % b;
    a = great;
  }
  return a;
}

console.log(gcd(48, 18)); 
console.log(gcd(100, 25)); 
