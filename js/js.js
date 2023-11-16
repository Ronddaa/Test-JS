function getSlice(array, value) {
    let arr = array.indexOf(value);
    let message;

    if (arr === -1) {
        message = [];
    } else {
        message = array.slice(0, arr + 1);
    }

    return message;
}

console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}

function calculateTotalPrice(order) {
  let message;
  sum = 0;

  for (let i = 0; i < order.length; i++){
    sum += order[i];
    message = sum;
  }

  return message;
}



console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

function getElementWidth(content, padding, border) {
  let sum = parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;

  return sum;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("52px", "83px", "44px"));
console.log(getElementWidth("560px", "86px", "46px"));
console.log(getElementWidth("507px", "87px", "47px"));

function checkStorage(storage, item) {
  let message;
  let lowCase = item.toLowerCase();

  if (storage.includes(lowCase)){
    message = `${lowCase} is available to order!`;
  } else {
    message = 'Sorry! We are out of stock!';
  }
  return message;
}

console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
console.log(checkStorage(["apple", "plum", "pear"], "plum"));
console.log(checkStorage(["apple", "plum", "pear"], "orange"));
console.log(checkStorage(["apple", "plum", "pear"], "carrot"));
console.log(checkStorage(["apple", "plum", "pear"], "pear"));


