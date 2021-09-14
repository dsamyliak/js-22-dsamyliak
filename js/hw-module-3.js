
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
