
// Online webinar 3 Kyryl Melnyk
//Репозиторий https://github.com/VovaMelnyk/js-group-39
//mdn - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// HW-3 - Task 1 - Создание объекта

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
  
// };

// console.log(apartment);
// console.log(apartment.imgUrl);

// ------------------------------------------------------------------------
// HW-3 - Task 2 - Вложенные свойства

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
// 	name: "Henry",
// 	phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
// 	},
// };

// console.log(apartment.owner);
// // ===
// console.log(apartment["owner"]);

// console.log(apartment.owner["email"]);
// // ===
// console.log(apartment.owner.email);

// ------------------------------------------------------------------------
// HW-3 - Task 3 - Доступ к свойствам через точку

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// console.log(apartment.tags.indexOf("premium"));
// console.log(apartment.tags[0]);
// console.log(apartment.tags.indexOf("promoted"));
// console.log(apartment.tags[1]);
// console.log(apartment.tags.indexOf("top"));
// console.log(apartment.tags[2]);

// ------------------------------------------------------------------------
// HW-3 - Task 4 - Доступ к вложенным свойствам

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(2);
// console.log(averageRating); // 8.2
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// ------------------------------------------------------------------------
// HW-3 - Task 5 - Доступ к свойствам через квадратные скобки

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// ------------------------------------------------------------------------
// HW-3 - Task 6 - Изменение значения свойства

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment);

// ------------------------------------------------------------------------
// HW-3 - Task 7 - Добавление свойств

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: "Jamaica", city: "Kingston", };


// console.log(apartment);
// console.log(apartment.location);
// console.log(apartment.location.country);
// console.log(apartment.location.city);

// ------------------------------------------------------------------------
// HW-3 - Task 8 - Короткие свойства

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// console.log(product);

// ------------------------------------------------------------------------
// HW-3 - Task 9 - Вычисляемые свойства

// const propName = "name";
// const propSex = "sex";
// const user = {
//   age: 25
// };

// user[propName] = "Генри Сибола";
// user[propSex] = "Man";


// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25
// console.log(user); // age: 25, name: "Генри Сибола", sex: "Man",

// ------------------------------------------------------------------------

// const propName = "name";
// const propSex = "sex";
// const user = {
//     age: 25,
//     [propName]: "Генри Сибола",
//     [propSex]: "Man",
// };


// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25
// console.log(user.sex); // "Man"
// console.log(user); // age: 25, name: "Генри Сибола", sex: "Man",

// ------------------------------------------------------------------------

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };

// console.log(credentials.email);
// console.log(credentials.password);

// ------------------------------------------------------------------------
// HW-3 - Task 10 - Цикл for...in

// ------------------------------------------------------------------------
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }
// ------------------------------------------------------------------------


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//         values.push(apartment[key]);
//         keys.push(key);
//     }
//     console.log("Every step of keys:", keys);
//     console.log("Every step of values:", values);
//     console.log("");
// }
// console.log("");
// console.log("Final array of keys:", keys);
// console.log("Final array of values:", values);

// ------------------------------------------------------------------------
// HW-3 - Task 11 - Метод hasOwnProperty()

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// console.log(apartment);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
//   // Change code above this line
// }
// console.log(keys);
// console.log(values);
// console.log("");
// console.log(apartment);
// console.log(apartment.service);

// ------------------------------------------------------------------------
// HW-3 - Task 12 - Задача. Подсчёт свойств

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     propCount = Object.keys(object).length;
//       // Change code above this line
//   return propCount;
// }

// console.log("quantityProps =", countProps({ name: "Mango", age: 2 }));
// console.log("quantityProps =", countProps({}));
// console.log("quantityProps =", countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ------------------------------------------------------------------------
// HW-3 - Task 13 - Метод Object.keys()

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
//     console.log(`value of ${key.toLocaleUpperCase()} in for:`, values); 
// }
// console.log(keys);
// console.log(values);

// ------------------------------------------------------------------------
// HW-3 - Task 14 - Задача. Подсчёт свойств 2.0

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   propCount = Object.keys(object).length;

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({}));

// ------------------------------------------------------------------------
// HW-3 - Task 15 - Метод Object.values()

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log("Keys:", keys);
// console.log("values:", values);

// ------------------------------------------------------------------------
// HW-3 - Task 16 - Задача. Расходы на зарплату

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   let salary = Object.values(salaries);
//   console.log(salary);
//   console.log("quantity of salary's items:", salary.length);
//   for (let i = 0; i < salary.length; i++) {
//     totalSalary += salary[i];
//   }

//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// ------------------------------------------------------------------------
// HW-3 - Task 17 - Массив объектов

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const colorItem of colors) {
//   hexColors.push(colorItem.hex);
//   rgbColors.push(colorItem.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ------------------------------------------------------------------------
// HW-3 - Task 18 - Задача. Поиск объекта по значению свойства

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (const productItem of products) {
//   // console.log(productItem);
//   console.log(productItem.price);
//   if (productItem.name === productName) {
//     return productItem.price;
//   }
// }
//   return null;
//   // Change code above this line
// }

// console.log(`Product price is:`, getProductPrice("Radar"));
// console.log(`Product price is:`, getProductPrice("Scanner"));
// console.log(`Product price is:`, getProductPrice("Droid"));
// console.log(`Product price is:`, getProductPrice("Grip"));

// ------------------------------------------------------------------------
// HW-3 - Task 19 - Задача. Коллекция значений свойства

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let argArray = [];

//   for (const product of products) {
//   console.log(product);
//   if (product.hasOwnProperty(propName)) {
//     argArray.push(product[propName]);
//   }
    
// }
//   return argArray;
//   // Change code above this line
// }

// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("uan"));
// console.log(getAllPropValues("name"));

// ------------------------------------------------------------------------
// HW-3 - Task 20 - Задача. Общая стоимость товара

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let TotalPrice = 0;
  
//   for (const product of products) {
//     console.log(product);
    
//     if (product.name === productName) {
//       let TotalPrice = product.price * product.quantity;
//       // console.log(TotalPrice);
//       return TotalPrice;
//     }
    
//   }
//   return TotalPrice;
//   // Пиши код выше этой строки
// }

// // console.log(calculateTotalPrice("Blaster"));

// console.log(`Total price of Blaster =`, calculateTotalPrice("Blaster"));
// console.log(`Total price of Grip =`, calculateTotalPrice("Grip"));
// console.log(`Total price of Droid =`, calculateTotalPrice("Droid"));

// ------------------------------------------------------------------------
// HW-3 - Task 21 - Деструктуризация объектов

