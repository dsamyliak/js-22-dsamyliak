
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

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Destructure of highTemperatures
// const {yesterday, today, tomorrow,} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log("All temperatures: ", highTemperatures);
// console.log("Mean temperature =", meanTemperature);

// ------------------------------------------------------------------------
// HW-3 - Task 22 - Значения по умолчанию

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(highTemperatures);
// console.log(meanTemperature);

// console.log("today = ", today);
// console.log("Icon isn't in highTemperatures:", icon);

// ------------------------------------------------------------------------
// HW-3 - Task 23 - Изменение имени переменной

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(highYesterday);
// console.log(highToday);
// console.log(highTomorrow);
// console.log(`This is new key - icon in highTemperatures object ${highIcon}`);

// ------------------------------------------------------------------------
// HW-3 - Task 24 - Деструктуризация в циклах

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// // for (const color of colors) {
// //   hexColors.push(color.hex);
// //   rgbColors.push(color.rgb);
// // }

// for (const {hex , rgb,} of colors) {
     
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ------------------------------------------------------------------------
// HW-3 - Task 25 - Глубокая деструктуризация

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Change code below this line

// destructure
// const { today: { high: highToday, low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg", },
//     tomorrow: { high: highTomorrow, low: lowTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", }
// } = forecast;

// console.log("todayIcon =", todayIcon);
// console.log("tomorrowIcon =", tomorrowIcon);
// console.log(forecast);

// normal
// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// ------------------------------------------------------------------------
// HW-3 - Task 26 - Паттерн «Объект настроек»

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//     const { today: { low: todayLow, high: todayHigh, },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh, } } = forecast;
// //   const todayLow = forecast.today.low;
// //   const todayHigh = forecast.today.high;
// //   const tomorrowLow = forecast.tomorrow.low;
// //   const tomorrowHigh = forecast.tomorrow.high;
    
    
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));

// ------------------------------------------------------------------------
// HW-3 - Task 27 - Операция spread при передаче аргументов

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log("Best Score =", bestScore);
// console.log("Worst Score", worstScore);

// ------------------------------------------------------------------------
// HW-3 - Task 28 - Операция spread при создании нового массива

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log("All Scores =", allScores);
// console.log("Best Score =", bestScore);
// console.log("Worst Score =", worstScore);

// ------------------------------------------------------------------------
// HW-3 - Task 29 - Операция spread при создании нового объекта

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log('Default Settings: ', defaultSettings);
// console.log('New settings to override old: ', overrideSettings);
// console.log("Final Settings =", finalSettings);

// ------------------------------------------------------------------------
// HW-3 - Task 30 - Задача. Карточки задач

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     const dataNew = { category, priority, completed, ...data };
//     return dataNew;
//   // Change code above this line
// }

// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ text: "Buy bread" }));

// ------------------------------------------------------------------------
// HW-3 - Task 31 - Операция rest для сбора всех аргументов функции

// // Change code below this line
// function add(...args) {
    
//     let totalSum = 0;
//     for (const item of args) {
//        totalSum += item;
//         console.log(item);
//     }
//     return totalSum;
//   // Change code above this line
// }

// console.log("Total sum of these numbers 12, 4, 11, 48 =", add(12, 4, 11, 48));
// console.log("Total sum of these numbers 74, 11, 62, 46, 12, 36 =", add(74, 11, 62, 46, 12, 36));

// ------------------------------------------------------------------------
// HW-3 - Task 32 - Операция rest для сбора части аргументов функции

// // Change code below this line
// function addOverNum(firstArg, ...args) {
//   let total = 0;
    
//     console.log("First Arg:", firstArg);

//     for (const arg of args) {

//         console.log('arg in "for"', arg);

//     if (arg > firstArg) {
//         total += arg;
//     }  
//   }
//   return total;
//   // Change code above this line
// }

// console.log(`Sum of numbers over first element:`, addOverNum(50, 15, 27));

// console.log(`Sum of numbers over first element:`, addOverNum(20, 74, 11, 62, 46, 12, 36));

// ------------------------------------------------------------------------
// HW-3 - Task 33 - Задача. Массив совпадений

// // Change code below this line
// function findMatches(arrayFirst, ...args) {
//   const matches = []; // Don't change this line

//     console.log(arrayFirst, args);
//     for (const argsElement of args) {
//         for (const element of arrayFirst) {
//         // console.log("arrayFirst element:", element);
//            if (argsElement === element) {
//                matches.push(argsElement);
//             }     
//         }      
//     }
//   // Change code above this line
//   return matches;
// }

// console.log("array matches:", findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log("array matches:", findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// ------------------------------------------------------------------------
// HW-3 - Task 34 - Методы объекта

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`;
//     }
//   // Change code above this line
// };

// console.log('Get books from array "books" -', bookShelf.getBooks());
// console.log('bookShelf:', bookShelf);
// console.log('books of bookShelf:', bookShelf.books);

// ------------------------------------------------------------------------
// HW-3 - Task 35 - Доступ к свойствам объекта в его методах

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     // big version
//     //   const oldNameIndex = this.books.indexOf(oldName);
//     //   console.log(oldNameIndex);
//     //   const changeName = this.books.splice(oldNameIndex, 1, newName);
//     //   console.log(changeName);
//     //   return this.books;
      
//       // small version
//       const oldNameIndex = this.books.indexOf(oldName);
//       this.books.splice(oldNameIndex, 1, newName);

//       return this.books;
//     // Change code above this line
//   },
// };

// console.log(bookShelf);
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// ------------------------------------------------------------------------
// HW-3 - Task 36 - Задача. Лавка зелий «У старой жабы»

// const atTheOldToad = {
//   // Change code below this line
// potions: [],
//     //my practice
// // potions: [1, 2, 3, "Text1", "Book2", "String3"],

//   // Change code above this line
// };
// console.log("potions of atTheOldToad:", atTheOldToad.potions);

// ------------------------------------------------------------------------
// HW-3 - Task 37 - Задача. Получаем все зелья

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//     getPotions() {
//         return this.potions;
// },

//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());

// ------------------------------------------------------------------------
// HW-3 - Task 38 - Задача: добавляем новое зелье

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//       this.potions.push(potionName);


//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion")
// console.log(atTheOldToad.potions);

// ------------------------------------------------------------------------
// HW-3 - Task 39 - Задача. Удаляем зелье

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

//       const indexRemoveItem = this.potions.indexOf(potionName);
//       this.potions.splice(indexRemoveItem, 1);

//       return this.potions;

//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.potions);
// console.log('Remove first potion "Dragon breath":', atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.potions);
// console.log('Remove second potion "Speed potion":', atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.potions);

// ------------------------------------------------------------------------
// HW-3 - Task 40 - Задача: обновляем зелье

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//       this.potions.splice(this.potions.indexOf(oldName), 1, newName);

//       return this.potions;

//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.potions);
// console.log('Update potion name "Dragon breath" to "Polymorth"', atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.potions);

// ------------------------------------------------------------------------
// HW-3 - Task 41 - Задача: расширяем инвентарь

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const item of this.potions) {
//             if (item.name === newPotion.name) {
//                 console.log("item", item);
//                 console.log("newPotion", newPotion);
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
    
//         for (const item of this.potions) {
//             console.log("item", item);
//             if (item.name === potionName) {
//                 console.log(item.name);
//                 const potionIndex = this.potions.indexOf(item);
//                 console.log(potionIndex);
//                 this.potions.splice(potionIndex, 1);
//                 return this.potions;
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//     },
//     updatePotionName(oldName, newName) {
//         for (const item of this.potions) {
//             if (item.name === oldName) {
//                 console.log(item);
//                 console.log("item name:", item.name);
//                 console.log("new name:", newName);
//                 item.name = newName;
                
//                 return this.potions;
                
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//         // Change code above this line
//     },
// }

// console.log(atTheOldToad);
// console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// // atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// // console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }));

// // console.log(atTheOldToad.removePotion("Dragon breath"));
// // console.log(atTheOldToad.removePotion('"Dragon"'));

// // console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// // console.log(atTheOldToad.updatePotionName("Speed potion", "Polymorth"));
// // console.log(atTheOldToad.updatePotionName("XXX", "Polymorth"));



