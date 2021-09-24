// ------------------------------------------------------------------------
// CW-4

//filter of "Start of timer1(rray
// console.time('timer1', console.log("Start of timer1(Старт консоль таймера)"));


// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const element of array) {
//         console.log(element);
//         const passed = test(element);

//         if (passed) {
//             filteredArray.push(element);
//         }
//         console.log(passed);
//     }
//     return filteredArray;
// }

// const callback1 = function (value) {
//     return value >= 4;
// }

// const callback2 = function (value) {
//     return value === 5;
// }

// console.log("filter with callback1 value >= 4:", filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback1));

// console.log("filter with callback1 value = 5:", filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2));

// // ------------------------------------------------------------------------

// const fruits = [
//     {name: 'apples', quantity: '200', isFresh: 'true',},
//     {name: 'grapes', quantity: '300', isFresh: 'false',},
//     {name: 'oranges', quantity: '150', isFresh: 'true',},
// ];

// const getFruitsWithFreshParam = function (someFruit) {
//     return someFruit.isFresh === 'true';
// }

// console.log(filter(fruits, getFruitsWithFreshParam));

// // ------------------------------------------------------------------------

// console.timeEnd('timer1', console.log("End of timer1(Стоп консоль таймера)"));


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// HW-4 - Task 1 - Функция как значение

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log("result - Result of function makePizza(): ", result);
// console.log("pointer - Link to function makePizza: ", pointer);

// ------------------------------------------------------------------------
// HW-4 - Task 2 - Колбэк-функции

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Margarita", makePizza));
// console.log(makeMessage("Margarita", deliverPizza));
// console.log(makeMessage("4Cheese", makePizza));
// console.log(makeMessage("4Cheese", deliverPizza));

// ------------------------------------------------------------------------
// HW-4 - Task 3 - Инлайн-колбэки

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName){console.log(`Eating pizza ${pizzaName}`)});

// ------------------------------------------------------------------------
// HW-4 - Task 4 - Несколько колбэков

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
        
//         let isPizzaTrue = this.pizzas.includes(pizzaName);
//         // console.log(pizzaName);
//         // console.log(isPizzaTrue);
//             if (!isPizzaTrue) {
//                return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//             }
//                return onSuccess(pizzaName);
//     },
    
// };
// // Change code above this line
// console.log(pizzaPalace);
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// // ------------------------------------------------------------------------
// // alert(pizzaPalace.order('Smoked', makePizza, onOrderError));
// // alert(pizzaPalace.order('Vienna', makePizza, onOrderError));

// console.log(pizzaPalace.order('Ultracheese', makePizza, onOrderError));
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// // ------------------------------------------------------------------------
// // const isRecipientAvailable = Math.random() > 0.5;
// // console.log(!isRecipientAvailable);
// // ------------------------------------------------------------------------

// ------------------------------------------------------------------------
// HW-5 - Task 5 - Метод forEach(callback)

// const orderedItems = [7, 7, 7];
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice(orderedItems));

//-----------
// refactoring

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach(function (element, index) {
   
//         console.log(`${index}: ${element}`);
//         totalPrice += element;
    
//     });

//     return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// const orderedItems = [7, 7, 7];
// console.log(calculateTotalPrice(orderedItems));

// ------------------------------------------------------------------------

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// ------------------------------------------------------------------------

// ------------------------------------------------------------------------
// HW-5 - Task 6 - Задача. Фильтрация массива чисел

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([2, 3, 4, 5, 6, 7], 1));

//-----------
// refactoring

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//     numbers.forEach(function(number) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
            
//     });
  

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([12, 24, 8, 41, 76], 38));

// const emptyArray = filterArray([1, 2, 3, 4, 5], 5);
// console.log(emptyArray);

// ------------------------------------------------------------------------
// HW-5 - Task 7 - Задача. Общие элементы

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//   return commonElements;
//   // Change code above this line
// }

// let firstArray = [1, 2, 3], secondArray = [2, 4];
// let compareArrays = getCommonElements(firstArray, secondArray);
// console.log(compareArrays);

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//-----------
// refactoring

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function(element) {
//     //   console.log(element);
          
//         //   console.log(element2);
      
//           if (secondArray.includes(element)) {
//               console.log('ok:', element);
//               commonElements.push(element);
          
//           }
      
//       });
    
  
// return commonElements;
  
//   // Change code above this line
// }

// let firstArray = [1, 2, 3], secondArray = [2, 4];
// let compareArrays = getCommonElements(firstArray, secondArray);
// console.log(compareArrays);

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([11, 13, 11, 5, 12, 15, 5, 15, 16], [24, 11, 17, 19, 22, 6, 16, 23, 16]));
// // будет [11,11,16]

// ------------------------------------------------------------------------
// HW-5 - Task 8 - Стрелочные функции.

// Change code below this line

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }
// console.log(calculateTotalPrice(4, 400));

//-----------
// refactoring

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }
// console.log(calculateTotalPrice(4, 400));

// ------------------------------------------------------------------------
// HW-5 - Task 9 - Неявный возврат

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// // Change code above this line

// console.log(calculateTotalPrice(4, 400));

//-----------
// refactoring

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line

// console.log(calculateTotalPrice(4, 400));

// ------------------------------------------------------------------------
// HW-5 - Task 10 - Стрелочные функции как коллбеки

// // Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4]));

//-----------
// refactoring

// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => totalPrice += item);

//   return totalPrice;
// }
// // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ------------------------------------------------------------------------
// HW-5 - Task 11 - Задача. Фильтрация массива чисел 2.0

// Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

//-----------
// refactoring

// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {  if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// console.log(filterArray([12, 24, 8, 41, 76], 20));

// ------------------------------------------------------------------------
// HW-5 - Task 12 - Задача. Общие элементы 2.0

// // Change code below this line
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//-----------
// refactoring

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([1, 1, 2, 3], [1, 1, 1, 10, 20, 30]));
// console.log(getCommonElements([1, 1, 1, 10, 20, 30], [1, 1, 2, 3]));

// ------------------------------------------------------------------------
// HW-5 - Task 13 - Чистые функции

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }


//-----------
// refactoring

// function changeEven(numbers, value) {
//   // Change code below this line
//     const newNumbersArray = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         newNumbersArray[i] = numbers[i];
//     if (numbers[i] % 2 === 0) {
//       newNumbersArray[i] = numbers[i] + value;
//         }
        
//     }
//     return newNumbersArray;
//   // Change code above this line
    
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));

// ------------------------------------------------------------------------
// HW-5 - Task 14 - Метод map()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// ------------------------------------------------------------------------
// HW-5 - Task 15 - Метод map() и массив объектов

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const authors = books.map(book => book.title);
// console.log(titles);

// const authors = books.map(book => book.author);
// console.log(authors);

// const ratings = books.map(book => book.rating);
// console.log(ratings);

// ------------------------------------------------------------------------
// HW-5 - Task 16 - Метод flatMap()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// const titles = books.flatMap(book => book.title);
// console.log(titles);

// const authors = books.flatMap(book => book.author);
// console.log(authors);

// ------------------------------------------------------------------------
// HW-5 - Task 17 - Задача. Имена пользователей

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // Change code below this line
// const getUserNames = users.map(user => user.name);
//     // console.log(users);
//   // Change code above this line

// console.log(getUserNames);



// // Change code below this line
// const getUserNames = (users) => {
//     const newUsers = [];
//     users.map(user => newUsers.push(user.name, user.gender));
//     users.map(user => newUsers.push(user.age));
    
//     return newUsers;
//   };

//   // Change code above this line

// console.log(getUserNames(users));

// ------------------------------------------------------------------------
// HW-5 - Task 18 - Задача. Почты пользователей

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const usersLight = [
//   {
//     name: "Moore Hensley",
//     email: "777@gmail.com",
   
//   },
//   {
//     name: "Sharlene Bush",
//     email: "777@gmail.com",
    
//   },
//   {
//     name: "Ross Vazquez",
//     email: "777@gmail.com",
    
//   },
//   {
//     name: "Elma Head",
//     email: "777@gmail.com",
    
//   },
//   {
//     name: "Carey Barr",
//     email: "777@gmail.com",
   
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "777@gmail.com",
    
//   },
//   {
//     name: "Sheree Anthony",
//     email: "777@gmail.com",
   
//   },
// ];
// // Change code below this line
// const getUserEmails = (users) => {
//     const newUsers = [];
//     users.map(user => newUsers.push(user.email));
//     return newUsers;
//   };
//   // Change code above this line

// console.log(getUserEmails(users));
// console.log(getUserEmails(usersLight));

// ------------------------------------------------------------------------
// HW-5 - Task 19 - Методы filter и find

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);;

// console.log(evenNumbers);
// console.log(oddNumbers);

// ------------------------------------------------------------------------
// HW-5 - Task 20 - Фильтрация уникальных элементов

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

// console.log(allGenres);
// console.log(uniqueGenres);

// ------------------------------------------------------------------------
// HW-5 - Task 21 - Метод filter() и массив объектов

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// ------------------------------------------------------------------------
// HW-5 - Task 22 - Задача. Пользователи с цветом глаз

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ];

// // Change code below this line
// const getUsersWithEyeColor = (users, color, color2) => {
    
//     // const newUsers = users.filter(user => user.eyeColor === color || user.eyeColor === color2);
//     const newUsers = users.filter(user => user.eyeColor === color);
    
//     console.log(users.filter(user => user.balance > 2000));
//     console.log(color, color2);

//     return newUsers;
// };
// // Change code above this line
// const color = "brown";
// const color2 = "green";

// console.log("1st log", getUsersWithEyeColor(users, color, color2));
// console.log("2nd log", getUsersWithEyeColor(users, color));

// ------------------------------------------------------------------------
// HW-5 - Task 23 - Задача. Пользователи в возрастной категории

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];
// const minAge = 20;
// const maxAge = 30;

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
    
//     const usersAge = users.filter(user => user.age > minAge && user.age < maxAge);
//     return usersAge;
// };
// // Change code above this line

// console.log(getUsersWithAge(users, minAge, maxAge));
// console.log(getUsersWithAge(users, 80, 100));
// console.log(getUsersWithAge(users, 30, 40));

// ------------------------------------------------------------------------
// HW-5 - Task 24 - Задача. Пользователи с другом

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
    
//     const usersFriend = users.filter((user) =>
    
//         user.friends.includes(friendName)
    
//     );

//     return usersFriend;
// };
// // Change code above this line

// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));

// ------------------------------------------------------------------------
// HW-5 - Task 25 - Задача. Список друзей

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Change code below this line
// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends);
//     console.log(allFriends);

//     const uniqueFriends = allFriends.filter((friends, index, array) =>
//         // console.log(array)
//         // console.log(array.indexOf(friends), index)
//          array.indexOf(friends) === index
//     );

//     return uniqueFriends;
// };
// // Change code above this line

// console.log(getFriends(users));

// ------------------------------------------------------------------------
// HW-5 - Task 26 - Задача. Активные пользователи

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Change code below this line
// const getActiveUsers = (users) => {
   
//     const usersActive = users.filter(user => user.isActive);
    
//     return usersActive;
// };
// // Change code above this line

// console.log(getActiveUsers(users));

// ------------------------------------------------------------------------
// HW-5 - Task 27 - Задача. Неактивные пользователи

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Change code below this line
// const getInactiveUsers  = (users) => {
   
//     const usersInactive = users.filter(user => user.isActive === false);
    
//     return usersInactive;

// };
// // Change code above this line

// console.log(getInactiveUsers(users));

// ------------------------------------------------------------------------
// HW-5 - Task 28 - Метод find()

