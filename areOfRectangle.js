function calculateArea(width, height) {
  return width * height;
}

const areaWithFixedWidth = calculateArea.bind(null, 10);

const result = areaWithFixedWidth(5);
console.log(result);
