function validatePhoneNumber(phone) {
  const regex = /^(?:\d{10}|\d{3}-\d{3}-\d{4}|\d{3} \d{3} \d{4})$/;
  return regex.test(phone);
}

console.log(validatePhoneNumber("1234567890"));     
console.log(validatePhoneNumber("123-456-7890"));   
console.log(validatePhoneNumber("123 456 7890"));   
console.log(validatePhoneNumber("123-45-67890"));  
console.log(validatePhoneNumber("1234-567890"));   
