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

// Домашняя работа 3 по JS

// Первое задание !!!

function slugify(title) {
  let address;
  let slug = title.toLowerCase().split(' ');
  address = slug.join('-');

  return address;

}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


// Второе задание !!!

function makeArray(firstArray, secondArray, maxLength) {

 let mass = firstArray.concat(secondArray);
  let newMass;
  if (mass.length > maxLength) {
    newMass = mass.slice(0, maxLength);
  } else {
    newMass = mass;
  }
  return newMass;

  // Или сделать так, но по условиям зачем то нужен if ... else

  // let mass = firstArray.concat(secondArray);
  // let newMass = mass.slice(0, maxLength);
  // return newMass;

}



console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


// Третье задание !!!


function filterArray(numbers, value) {
  let newMass = [];
  for (let num of numbers) { 
    if (num > value) {
      newMass.push(num);
    }
  }
  return newMass;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]


// Модуль 4 Объекты


// Автопроверка 1 Объекты

let apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr : "Spacious apartment in the city center",
  rating : 4,
  price : 2153,
  tags : ["premium", "promoted", "top"],
}



// Автопроверка 2 Объекты

let apartment2 = { // В названии переменной не должно быть двойки
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner : {
    name : 'Henry',
    phone : '982-126-1588',
    email : 'henry.carter@aptmail.com',
  }
};

// Автопроверка 3 Объекты

let apartment3 = {  // В названии переменной не должно быть тройки
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

let aptRating3 = apartment.rating;
let aptDescr3 = apartment.descr;
let aptPrice3 = apartment.price;
let aptTags3 = apartment.tags;


// Автопроверка 4 Объекты

const apartment4 = { // В названии переменной не должно быть четверки
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];


// Автопроверка 5 Объекты

const apartment5 = { // В названии ВСЕХ переменных не должно быть пятерки
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

let aptRating5 = apartment.rating;
let aptDescr5 = apartment.descr;
let aptPrice5 = apartment.price;
let aptTags5 = apartment.tags;


// Автопроверка 6 Объекты

const apartment6 = { // В названии переменной не должно быть шестерки
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');

// Автопроверка 6 Объекты

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = 'Jamaica';
apartment.location.city = 'Kingston';


// Автопроверка 7 Объекты

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};

// Автопроверка 8 Объекты

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam"
};


// Модуль 4 Перебор объекта

// Автопроверка 1 Перебор объекта

