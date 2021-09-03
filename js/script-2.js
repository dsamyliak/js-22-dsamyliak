// ------------------------------------------------------------------------
// 01-switch


// const stars = 3;

// let price;

// console.log(`Отель ${stars} звезд(ы)`);

// switch (stars) {
//     case 1:
//         price = 20;
//         console.log('Цена отеля = ' + price + '$');
//         break;
//     case 2:
//         price = 30;
//         console.log('Цена отеля = ' + price + '$');
//         break;
//     case 3:
//         price = 50;
//         console.log('Цена отеля = ' + price + '$');
//         break;
//     case 4:
//         price = 70;
//         console.log('Цена отеля = ' + price + '$');
//         break;
//     case 5:
//         price = 120;
//         console.log('Цена отеля = ' + price + '$');
//         break;
    
//     default:
//         console.log("Такого кол-ва звезд нет");
//         break;
// }

// console.log(price);


/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

// //  1. сделать переменные
// const option = 1526;
// let message = '';

// // 2. сделать switch 1 2 3
// // 3. в каждом кейсе записать в message строку
// switch (option) {
//   case 1:
//     message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//     break;

//   case 2:
//     message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//     break;

//   case 3:
//     message = 'Посылка будет отправлена сегодня';
//     break;

//   default:
//     message = 'Вам перезвонит менеджер';
// }

// // 4. сделать лог message
// console.log(message);


// ------------------------------------------------------------------------
// theory from loops - task about maxClients


// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log('start loop clientCounter =', clientCounter);
//     clientCounter += 1;
//     // debugger;
//     console.log('end loop clientCounter =', clientCounter);
// }


// ------------------------------------------------------------------------
// do...while


// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// for


// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// };