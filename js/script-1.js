// ------------------------------------------------------------------------
// 01-vars

// const priceTop = 100;
// const description = "About product";
// let xyz = 'Text';

// console.log("Top price =", priceTop);
// console.log(description);
// console.log("xyz =",xyz);

// ------------------------------------------------------------------------
// 02-input

// ok - true / cancel - false

// const shouldRenew = confirm("Do you want to renew subscribing?");
// console.log(shouldRenew);


//ok - string = '', cancel - object = null
// let quantity = prompt('What quantity?');

// console.log(typeof (quantity));
// console.log(quantity);


// quantity = Number(quantity);
// // 
// console.log(quantity);
// console.log(typeof quantity);

// ------------------------------------------------------------------------
// 03-numbers

// let elementWidth = '50px';
// const resultWidth = Number.parseInt(elementWidth);

// console.log(resultWidth);

// let elementHeight = '200.74px';
// const resultHeight = Number.parseFloat(elementHeight);

// console.log(resultHeight);

// let salary = 75789.1345667;
// console.log('text salary -', salary.toFixed(2));

// salary = salary.toFixed(2);
// console.log('number salary -', Number(salary));

// salary = Number(salary.toFixed(2));
// console.log('number salary -', salary);

// let quantity = '30';
// let value = 'This string impossible to convert to number';

// true 1 / false 0
// console.log(Number(true));
// console.log(Number(false));


// NaN - not a number
// console.log(Number('asdsa'));


// // Object Math
// // 2to3 - two to the third power
// const base = 2;
// const power = 3;

// const result = Math.pow(2, 3);
// console.log(result);

// let resultVariables = Math.pow(base, power);
// console.log(resultVariables);


// // baseINpower = 2in5 = 32
// const baseTwo = 2;
// const powerTwo = 5;
// const resultMin = Math.pow(baseTwo, powerTwo);
// console.log(resultMin);

// // 2in5 = 32
// console.log(2 ** 5);
// console.log(baseTwo ** powerTwo);
 

// // Script to power some number to some power
// let base = prompt('Write a number');
// base = Number(base);
// console.log(base);

// let power = prompt('Write a power');
// power = Number(power);
// console.log(power);

// let result = base ** power;
// console.log(result);


// Math.random() Math.round()

// const max = 10;
// const min = 5;

// console.log(Math.random() * (max - min) + min);

// const randomNumber = Math.round((Math.random() * (max - min) + min));
// console.log(randomNumber);

// console.log(Math.round((Math.random() * (max - min) + min)));


// ------------------------------------------------------------------------
// 04-strings


// 123456789 - string.length = 9


// const message1 = "123456789"
// console.log(message1.length);

// const message = "Hello"
// console.log("Hello consist 5 symbols =", message.length);


// // concatenation


// const firstName = "Ivan";
// const lastName = "Deerov";

// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// const room = 716;
// const typeRoom = "VIP";

// const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + typeRoom + ' номер ' + room + '.';
// console.log(welcomeMsg);

// // ` ` ${variable}
// console.log(`${firstName} ${lastName} is a american John Deer!`);

// // Подивимось на різний порядок операндів.
// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"


// Методи toLowerCase() і toUpperCase() і normalized


// const brand = 'Samsung';
// const inDb = 'samsung';
// const normalizedBrand = brand.toLowerCase();

// console.log(brand + ' ' + normalizedBrand);

// let brand = 'samSuNg';
// console.log(brand[0]);
// console.log(brand[1]);
// console.log(brand[2]);
// console.log(brand[3]);
// console.log(brand[4]);
// console.log(brand[5]);
// console.log(brand[6]);

// console.log("");
// console.log('');


// console.log(brand.slice(3).toUpperCase());
// console.log(brand.slice(3).toLowerCase());

// brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
// console.log('samSuNg convert to Samsung:', brand);


// includes();


// const blackListedWord1 = 'спам';
// const blackListedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, на 1млн долларс!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите...';
// const string3 = 'Рекламная компания #fatlivemaster';

// console.log(string1.includes(blackListedWord1));
// console.log(string1.includes(blackListedWord2));

// console.log(string2.includes(blackListedWord1));
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blackListedWord2));

// console.log(string3.includes(blackListedWord1));
// console.log(string3.includes(blackListedWord2));


// 05-comparison-operations


// console.log(15 > 15);
// console.log(15 > 15);

// console.log('15' > 14); //true

// console.log('15' > 16); //false

// const isEqual = 5 == 5; //true
// console.log(isEqual);

// const isEqual2 = '5' == 5; //true
// console.log(isEqual2);

// const isEqual3 = 1 == '1'; //true
// console.log(isEqual3);

// const isEqual4 = 1 === '1'; //false
// console.log(isEqual4);


// 06-logical-operators

// // Boolean 

// console.log(Number(null));
// console.log(Number(NaN));

// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(-5));

// And - &&
// Or - ||
// Not - !

// 06-1-segment


// const x1 = 10;
// const x2 = 30;

// const number = 20;

// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
// console.log(`ЧИсло ${number} попадает в отрезок после ${x2}?`, number > x2);

// const res = number > x1 && number < x2;
// console.log(`Число ${number} попадает в отрезок между ${x1} и ${x2}: ${Boolean(res)}`);


// 06-2-chat


// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат? ', canOpenChat);


// 06-3-subscription


// const sub = 'pro';

// const canAccessContent = sub === 'pro' || sub === 'vip';
// // true || false => true
// // false || true => true
// // false || false => false

// console.log('Есть доступ к контенту? ', canAccessContent);


// 07-branching


//Тернарный оператор


// const balance = 100;
// // let message;

// // if (balance >= 0) {
// //   message = 'Позитивный баланс';
// //  } else {
// //   message = 'Негативный баланс';
// // }

// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

// console.log(message + ':', balance);
// // console.log(message);


// Оператор ветвления else...if


// const salary = 5000;

// if (salary <= 500) {
//   console.log('Уровень 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Уровень 2');
// } else if (salary > 1500 && salary < 3000) {
//   console.log('Уровень 3');
// } else {
//   console.log('Уровень 4');
// }


//Тернарный оператор


// const salary = 50000;
// let money;

// money = salary >= 50000 ? 'Good money' : 'Bad money';

// console.log(salary +'$ ' + money);

