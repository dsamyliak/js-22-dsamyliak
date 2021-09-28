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
        
//         this.items.splice(this.items.indexOf(itemToRemove), 1);

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



// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
