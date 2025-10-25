function calculateDiscount(discount, price) {
  return price - (price * discount / 100);
}


const tenPercentOff = calculateDiscount.bind(null, 10);

console.log(tenPercentOff(50));  
console.log(tenPercentOff(100)); 

