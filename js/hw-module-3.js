
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

function countProps(object) {
  let propCount = 0;
  // Change code below this line

  // Change code above this line
  return propCount;
}


