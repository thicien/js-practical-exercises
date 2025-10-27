function reverseInPlace(str) {
  return str
    .split(" ")                
    .map(word => word.split("").reverse().join("")) 
    .join(" ");                
}

console.log(reverseInPlace("I am the good boy"));

