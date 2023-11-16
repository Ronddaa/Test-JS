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

let planets1 = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets1.length; i += 1) {
  console.log(planets1[i]);
}

function getElementWidth(content, padding, border) { 
  let sum = parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;

  return sum;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("52px", "83px", "44px"));
console.log(getElementWidth("560px", "86px", "46px"));
console.log(getElementWidth("507px", "87px", "47px"));

function checkStorage(storage, item) { // Итерация по массиву Автопроверка 3
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


function getCommonElements(array1, array2) { // Итерация по массиву Автопроверка 4
  neArray = [];
  let message;

  for (let i = 0; i < array1.length; i++){
    if(array2.includes(array1[i])){
      neArray.push(array1[i])
    }
  }
  return neArray;
}

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([1, 3], [2, 17, 19]));


function calculateTotalPrice(order) {  // Итерация по массиву Автопроверка 5
  let price = 0;
  for (let sum of order) {
    price += sum;
  }
  return price;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([12, 85, 37, 4]));


//  Функции (часть вторая)

// Чи потрібно оголошувати змінну arguments у функції для доступу до неї?

// + Ні, вона є в кожній функції за замовчуванням
// - Так, її від початку немає у функції

// Навіщо перетворювати псевдомасив у масив?

// + Щоб отримати можливість використовувати методи масиву
// - Щоб можна було отримати кількість аргументів
// - Щоб можна було перебрати масив за допомогою циклу

function createReversedArray() { // Функции Часть Вторая Автопроверка 1
  let mass = Array.from(arguments);


  let rev = mass.reverse();
  
  return rev;
}

console.log(createReversedArray(12, 85, 37, 4));
console.log(createReversedArray(412, 371, 94, 63, 176));
console.log(createReversedArray(164, 48, 291));


function calculateTax(amount, taxRate = 0.2) { // Функции Часть Вторая Автопроверка 2
  let total = amount * taxRate;

  return total;
}

console.log(calculateTax(100, 0.1));
console.log(calculateTax(200, 0.1));
console.log(calculateTax(100, 0.2));
console.log(calculateTax(200, 0.2));
console.log(calculateTax(100, 0.3));
console.log(calculateTax(200, 0.3));
console.log(calculateTax(100));
console.log(calculateTax(200));


// Функцію, створену яким синтаксисом можна викликати до місця оголошення?

// - Функціональний вираз
// + Оголошення функції