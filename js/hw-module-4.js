// ------------------------------------------------------------------------
// CW-4

//filter of "Start of timer1(rray
console.time('timer1', console.log("Start of timer1(Старт консоль таймера)"));


const filter = function (array, test) {
    const filteredArray = [];

    for (const element of array) {
        console.log(element);
        const passed = test(element);

        if (passed) {
            filteredArray.push(element);
        }
        console.log(passed);
    }
    return filteredArray;
}

const callback1 = function (value) {
    return value >= 4;
}

const callback2 = function (value) {
    return value === 5;
}

console.log("filter with callback1 value >= 4:", filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback1));

console.log("filter with callback1 value = 5:", filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2));

// ------------------------------------------------------------------------

const fruits = [
    {name: 'apples', quantity: '200', isFresh: 'true',},
    {name: 'grapes', quantity: '300', isFresh: 'false',},
    {name: 'oranges', quantity: '150', isFresh: 'true',},
];

const getFruitsWithFreshParam = function (someFruit) {
    return someFruit.isFresh === 'true';
}

console.log(filter(fruits, getFruitsWithFreshParam));

// ------------------------------------------------------------------------

console.timeEnd('timer1');
