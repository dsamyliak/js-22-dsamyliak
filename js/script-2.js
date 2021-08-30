// ------------------------------------------------------------------------
// 01-switch


const stars = 3;

let price;

console.log(`Отель ${stars} звезд(ы)`);

switch (stars) {
    case 1:
        price = 20;
        console.log('Цена отеля = ' + price + '$');
        break;
    case 2:
        price = 30;
        console.log('Цена отеля = ' + price + '$');
        break;
    case 3:
        price = 50;
        console.log('Цена отеля = ' + price + '$');
        break;
    case 4:
        price = 70;
        console.log('Цена отеля = ' + price + '$');
        break;
    case 5:
        price = 120;
        console.log('Цена отеля = ' + price + '$');
        break;
    
    default:
        console.log("Такого кол-ва звезд нет");
        break;
}

// console.log(price);


