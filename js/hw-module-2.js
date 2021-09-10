// ------------------------------------------------------------------------
// HW - Module 2 - Task 10

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
// words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango asdsad sadasd text cool", " "));

// ------------------------------------------------------------------------
// HW - Module 2 - Task 13 - slugify()

// function slugify(title) {
//   // Change code below this line
//   title = title.toLowerCase();
//   title = title.split(" ");
//   title = title.join("-");
 
//   return title;
//   // Change code above this line
// }

// let result;

// result = slugify("Arrays for begginers");
// console.log(result);

// result = slugify("English for developer");
// console.log(result);

// result = slugify("How to become a JUNIOR developer in TWO WEEKS");
// console.log(result);

// ------------------------------------------------------------------------
// HW - Module 2 - Task 14 - slice()


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// ------------------------------------------------------------------------
// HW - Module 2 - Task 15 - concat()

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients, oldClients, newClients); // Change this line
// // oldClients + newClients + oldClients + newClients
// console.log(allClients);

// ------------------------------------------------------------------------
// HW - Module 2 - Task 16 - array composition

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   let newArray = firstArray.concat(secondArray);
//   newArray = newArray.slice(0, maxLength);

//   return newArray;
 
//     // Change code above this line
// }

// let newArray = makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// console.log(newArray);

// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));

// ------------------------------------------------------------------------
// HW - Module 2 - Task 17 - for

// theory
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// ------------------------------------------------------------------------
// HW - Module 2 - Task 18 - сумма чисел (цикл for)

// let number = 10;

// function calculateTotal(number) {
//  // Change code below this line
//   let sum = 0;
  
// for (let i = 0; i <= number; i += 1) {

//   console.log('i = ', i);
//   sum = sum + i;
//   console.log('sum + i = ', sum);
//   }
  
//   return sum;
//   // Change code above this line
// }

// let summa;
// summa = calculateTotal(number);
// console.log('total sum = ', summa);

// ------------------------------------------------------------------------
// HW - Module 2 - Task 19 - Итерация по массиву

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ------------------------------------------------------------------------
// HW - Module 2 - Task 20 - подсчёт суммы покупки

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
    
//     total = total + order[i];
//     console.log('i = ' , i);
//   }
//   // Change code above this line
//   return total;
// }
// const order = [12, 85, 37, 4];
// console.log(order);
// console.log('order length = ', order.length);

// let TotalPrice = calculateTotalPrice(order);
// console.log('Total Price = ', TotalPrice);

// ------------------------------------------------------------------------
// HW - Module 2 - Task 21 - поиск самого длинного слова

// let string = "The quick brown fox jumped over the lazy dog";
// console.log(string);
// let newArray = string.split(" ");
// console.log(newArray);
// let maxWord;
// let maxSymbols = 0;


// for (let i = 0; i < newArray.length; i += 1) {
  
  
//   let wordLength = newArray[i];
//   console.log(wordLength);
  
//   let symbolQuantity = wordLength.length;
//     console.log("symbolQuantity = ", symbolQuantity);
  

//   if (symbolQuantity >= maxSymbols) {
//     maxSymbols = symbolQuantity;
//     console.log("maxSymbolWord = ", maxSymbols);
//     maxWord = wordLength;
//   }
  
// }
// console.log("maxWord =", maxWord);

// //////////////////////////////////////////
// // function findLongestWord(string):

// function findLongestWord(string) {
//   // Change code below this line
// let newArray = string.split(" ");
//   let maxWord;
//   let maxSymbols = 0;
  
//   for (let i = 0; i < newArray.length; i += 1) {
    
//   let wordLength = newArray[i];
//   let symbolQuantity = wordLength.length;
   
//   if (symbolQuantity >= maxSymbols) {
//     maxSymbols = symbolQuantity;
//     maxWord = wordLength;
//   }
  
// }
  
// return maxWord;

//   // Change code above this line
// }

// //////////////////////////////////////////

// ------------------------------------------------------------------------
// HW - Module 2 - Task 22 - Метод push()

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i += 1) {
//   numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }

// let result = createArrayOfNumbers(14, 17);
// console.log("Result =", result);

// ------------------------------------------------------------------------
// HW - Module 2 - Task 23 - фильтрация массива чисел

// function filterArray(numbers, value) {
//    // Change code below this line
//   const resultArray = [];
//   console.log("Numbers: ", numbers, "Value: ", value);
  
//   for (const someNumbers of numbers) {
//     // console.log("someNumbers: ", someNumbers);
//     if (someNumbers > value) {
//       resultArray.push(someNumbers);

//       // console.log("stepSomeArray: ", resultArray);
//     }
//   }
  
//  return resultArray;
//   // Change code above this line
// }

// console.log("numbers > value = resultArray:", filterArray([1, 2, 3, 4, 5], 3));
// console.log("numbers > value = resultArray:", filterArray([12, 24, 8, 41, 76], 38));
// console.log("numbers > value = resultArray:", filterArray([1, 2, 3, 4, 5], 5));

// ------------------------------------------------------------------------
// HW - Module 2 - Task 24 - Метод includes()

// const fruit = "plum";
// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);
// console.log(`consist of ${fruit}:`, fruits.includes(fruit));


// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(`consist of apple:`, checkFruit("apple"));
// console.log(`consist of ():`, checkFruit());

// ------------------------------------------------------------------------
// HW - Module 2 - Task 25 - Задача: общие элементы

// const array1 = [1, 2, 3];
// const array2 = [2, 1, 17, 19];
// console.log(array1, array2);

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let commonArray = [];

//   for (let i = 0; i < array1.length; i++) {
    
//   if (array2.includes(array1[i])) {
//     commonArray.push(array1[i]);
//   };
//   // console.log(commonArray);
// }

//   return commonArray;
//  // Change code above this line
// }

// console.log("Common Elements of [1, 2, 3], [2, 4]: ", getCommonElements([1, 2, 3], [2, 4]));

// console.log("Common Elements of [1, 2, 3], [2, 1, 17, 19]: ", getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// console.log("Common Elements of [24, 12, 27, 3], [12, 8, 3, 36, 27]: ", getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// ------------------------------------------------------------------------
// HW - Module 2 - Task 26 - Цикл for...of

// const order = [12, 85, 37, 4];

// // function calculateTotalPrice(order) {
// //   let total = 0;
// //   // Change code below this line

// //   for (let i = 0; i < order.length; i += 1) {
// //     total += order[i];
// //   }

// //   // Change code above this line
// //   return total;
// // }


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const orderELement of order) {
//     total += orderELement;
//     console.log(orderELement);
//   }

//   // Change code above this line
//   return total;
// }

// console.log("Total: ", calculateTotalPrice(order));

// console.log("Total: ", calculateTotalPrice([412, 371, 94, 63, 176]));

// ------------------------------------------------------------------------
// HW - Module 2 - Task 27 - Зачада: фильтрация массива чисел 2.0

// const numbers = [1, 2, 3, 4, 5];
// const value = 3;

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
    
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log("Filtered Array", filterArray(numbers, value));

// console.log("Filtered Array", filterArray([12, 24, 8, 41, 76], 20));

// ------------------------------------------------------------------------
// HW - Module 2 - Task 28 - Оператор %

// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log("a:", a, "b:", b, "c:", c, "d:", d, "e:", e);

// ------------------------------------------------------------------------
// HW - Module 2 - Task 29 - Задача: чётные числа

// const start = 2;
// const end = 5;

// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const evenNumbersArray = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbersArray.push(i);
//     }
// }

// return evenNumbersArray;
//     // Change code above this line
//   }

// console.log("Even numbers array:", getEvenNumbers(start, end));

// console.log("Even numbers array:", getEvenNumbers(3, 11));

// console.log("Even numbers array:", getEvenNumbers(6, 12));

// console.log("Even numbers array:", getEvenNumbers(0, 10));

// ------------------------------------------------------------------------
// HW - Module 2 - Task 30 - Оператор break

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log('Number:', number);

// ------------------------------------------------------------------------
// HW - Module 2 - Task 31 - Оператор break vs return в функции

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// function findNumber(start, end, divisor) {
//   // Change code below this line
  

//   for (let i = start; i < end; i += 1) {
//     console.log(i);
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

  
//   // Change code above this line
// }

// console.log("1st number that / without remainder(from (2 to 6) / 5):", findNumber(2, 6, 5));

// console.log("1st number that / without remainder(from (8 to 17) / 3):", findNumber(8, 17, 3));

// ------------------------------------------------------------------------
// HW - Module 2 - Task 32 - Задача: функция includes()

// function includes(array, value) {
//   // Change code below this line
//   for (const arrayElement of array) {
//     console.log(arrayElement);
//   if (arrayElement === value) {
//     return true;
//   }
    
//   }
//   return false;
//   // Change code above this line
// }

// console.log("Includes value 6 in [1, 2, 3, 4, 5] true/false:", includes([1, 2, 3, 4, 5], 6));

// console.log("Includes value Uranus in [Earth, Mars, Venus, Jupiter, Saturn] true/false:", includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
