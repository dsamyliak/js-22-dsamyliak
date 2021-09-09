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

