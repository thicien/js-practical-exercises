function capitalize() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const name = capitalize.call("john");
console.log(name); 
