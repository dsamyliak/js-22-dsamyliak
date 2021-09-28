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
// CW-5 - call and apply

console.log(this);
const call = a => {console.log(this);};
console.log(this);

