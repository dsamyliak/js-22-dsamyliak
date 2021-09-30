// ------------------------------------------------------------------------
// CW-5

console.log('CW-5 Started;');

// ------------------------------------------------------------------------
// CW-5 - This This This This This This This This This This This 

// const user = {
//     tag: 'Mango-fruit',
//     showTag() {
//         console.log('showTag -> this', this);
//     }
// };

// user.showTag();

// // ------------------------------------------------------------------------

// const foo = function() {
// console.log('foo -> this', this)
// };

// foo();

// // ------------------------------------------------------------------------

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// const showColor = function () {
//     console.log('showColor -> this.color and this.tag -', this.color + " color and tag " + this.tag);
// };

// const user = {
//     tag: 'Mango',
//     color: 'Red-green',
// };

// console.log('user', user);

// //

// user.showUserTag = showTag;

// user.showUserTag();

// //

// user.showUserColor = showColor;

// user.showUserColor();

// //

// user.showUserNewColor = function() {
//     console.log('showUserNewColor -> this.color', this.color);
// };

// user.showUserNewColor();

// ------------------------------------------------------------------------

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     }
// };

// const userNew = {
//     tag: 'MangoNew',
//     showTagNew() {
//         console.log('showTagNew -> this', this);
//         console.log('showTagNew -> this.tag', this.tag);
//     }
// };

// // user.showTag();

// //

// const outerShowTag = user.showTag;

// const outerNewShowTag = userNew.showTagNew;

// userNew.showTagNew(); // tag: 'MangoNew' ... this.tag MangoNew

// userNew.outerNewShowTag(); // in userNew no function with name outerNewShowTag
// outerShowTag(); // underfined

// ------------------------------------------------------------------------

// const userNew = {
//     tag: 'MangoNew',
//     showTagNew() {
//         console.log('showTagNew -> this', this);
//         console.log('showTagNew -> this.tag', this.tag);
//     }
// };

// const invokeAction = function (action) {
//     console.log(action);
    
//     action();
// };

// invokeAction(userNew.showTagNew);

// ------------------------------------------------------------------------

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//         console.log('increment after -> this', this);
//     },
//     decrement(value) {
//         console.log('decremment -> this', this);
//         this.value -= value;
//         console.log('decremment after -> this', this);
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// // updateCounter(10, counter.increment);
// // updateCounter(5, counter.decrement);

// counter.increment(10);
// counter.decrement(5);
// counter.decrement(5);
// counter.decrement(5);
// console.log('counter.value =', counter.value);

// ------------------------------------------------------------------------
// CW-5 - call & apply & bind

// console.log(this);
// const call = a => {console.log(this);};
// console.log(this);

// ------------------------------------------------------------------------
// HW-5 - Task 1 - Контекст вызова функции

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));

// ------------------------------------------------------------------------
// HW-5 - Task 2 - Задача: аккаунт пользователя

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ------------------------------------------------------------------------
// HW-5 - Task 3 - Задача: история заказов

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//       return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
      
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));

// ------------------------------------------------------------------------
// HW-5 - Task 4 - Прототип объекта

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);
// console.log(parent.isPrototypeOf(child));

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(child.name, child.age, child.surname, child.heritage);

// ------------------------------------------------------------------------
// HW-5 - Task 5 - Задача: цепочка прототипов

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// child.parents = ["Stacey", "Paul"];

// // Change code above this line

// console.log(ancestor.isPrototypeOf(parent));
// console.log(parent.isPrototypeOf(child));
// console.log(child.name, child.age, child.surname, child.heritage, child.parents);
// console.log(parent.name, parent.age, parent.surname, parent.heritage);
// console.log("hasOwnProperty of:", "surname -", child.hasOwnProperty("surname"), ";" , "parents -", child.hasOwnProperty("parents"));
// console.log(parent.hasOwnProperty("surname"), parent.hasOwnProperty("heritage"));
// console.log(ancestor.hasOwnProperty("surname"), child.hasOwnProperty("heritage"));

// ------------------------------------------------------------------------
// HW-5 - Task 6 - Объявление класса

// class Car {
    
// };

// const emptyClass = new Car();

// console.log(emptyClass);

// ------------------------------------------------------------------------
// HW-5 - Task 7 - Конструктор класса

// class Car {
//   // Change code below this line
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
// }
//   // Change code above this line
// }

// const bmw = new Car("BMW", "X5", 58900);
// console.log(bmw);
// const audi = new Car("Audi", "Q3", 36000);
// console.log(audi);
// const nissan = new Car("Nissan","Murano", 31700);
// console.log(nissan);

// const bmwPrice = bmw.price;
// console.log(bmwPrice);
// console.log(audi.model);

// ------------------------------------------------------------------------
// HW-5 - Task 8 - Объект параметров

// class Car {
//   // Change code below this line
//     constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }
// // console.log(first.brand);

// const first = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(first, first.brand);
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
// new Car({ brand: "Nissan", model: "Murano", price: 31700 });

// ------------------------------------------------------------------------
// HW-5 - Task 9 - Методы класса

//theory

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// console.log(User);
// console.dir(User);

//

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//     //method getPrice
//     getPrice() {
//         return this.price;
//     }
//     //method changePrice(newPrice)
//     changePrice(newPrice) {
//         this.price = newPrice;
//         return;
//     }
//   // Change code above this line
// }
// const bmw = new Car({ brand: "bmw", model: "328", price: "30000$" });
// console.log(bmw.getPrice());
// console.log(bmw.changePrice("33000$"));
// console.log(bmw.getPrice());

// ------------------------------------------------------------------------
// HW-5 - Task 10 - Задача: склад

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
//         this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         // this.items.splice(this.items.indexOf(itemToRemove), 1); - not recommend
//         this.items = this.items.filter(item => item !== itemToRemove);
//     }
// };
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ------------------------------------------------------------------------
// HW-5 - Task 11 - Задача: конструктор строк

// class StringBuilder {
// 	constructor(value) {
// 	this.value = value;
// 	}
//   	getValue() {
//   	return this.value;
//   	}
//   	padStart(str) {
//     this.value = str + this.value;
//     }
//   	padEnd(str) {
//     this.value = this.value + str;  
//     }
//   	padBoth(str) {
//     this.value = str + this.value + str;
//     }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//theory

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

//

// ------------------------------------------------------------------------
// HW-5 - Task 12 - Приватные свойства

// class Car {
//   // Change code below this line
//     #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//     }
//     getBrand() {
//         return this.#brand;
//     }
//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }
//   // Change code above this line
// }

// const carAudi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(carAudi.brand, carAudi.model, carAudi.price);
// console.log(carAudi);
// console.log(carAudi.getBrand());
// const carBmw = new Car({ brand: "bmw", model: "X5", price: 58900 });
// console.log(carBmw);
// const carNissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// console.log(carNissan);
// carAudi.changeBrand("Honda");
// console.log(carAudi);
// console.log(carAudi.getBrand());

// ------------------------------------------------------------------------
// HW-5 - Task 13 - Задача: склад 2.0

// class Storage {
//   // Change code below this line
//     #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// ------------------------------------------------------------------------
// HW-5 - Task 14 - Задача: конструктор строк 2.0

// class StringBuilder {
//   // Change code below this line
//     #value;

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ------------------------------------------------------------------------
// HW-5 - Task 15 - Геттеры и сеттеры

// class Car {
//   // Change code below this line
//     #brand;
//     #model;
//     #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// ------------------------------------------------------------------------
// HW-5 - Task 16 - Статические свойства

// class Car {
//   // Change code below this line
    
//     static MAX_PRICE = 50000;
    
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//     set price(newPrice) {
//         if (newPrice <= Car.MAX_PRICE) {
//             this.#price = newPrice;
//       }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// console.log(Car.MAX_PRICE);

// ------------------------------------------------------------------------
// HW-5 - Task 17 - Статические методы

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//     static checkPrice(price) {
//         if (price > this.#MAX_PRICE) {
//             return "Error! Price exceeds the maximum";
//         }
//         return "Success! Price is within acceptable limits";
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//     }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ------------------------------------------------------------------------
// HW-5 - Task 18 - Наследование классов

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User {
//     static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//     };
// };

// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);

// ------------------------------------------------------------------------
// HW-5 - Task 19 - Конструктор дочернего класса

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ------------------------------------------------------------------------
// HW-5 - Task 20 - Методы дочернего класса

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel, blacklistedEmails }) {
//     super(email);
//       this.accessLevel = accessLevel;
//       this.blacklistedEmails = [];
//     };
//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     };
//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//     }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// mango.blacklist("ddd@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
// console.log(mango.isBlacklisted("ddd@mail.com")); // true