
//random task
//---------------------
// let obj = {
//  "0": 1,
//  0: 3,
// };

// console.log(obj);
// console.log(obj["0"]);
// console.log(obj[0]);
// alert( obj["0"] + obj[0] );

document.querySelector('.img-js-this').childNodes[2].style['top'] = '300px';
document.querySelector('.img-js-this').childNodes[2].style['left'] = '300px';


//---------------------
// 01-query-selectors
//---------------------

// const magicBtn = document.querySelector('.js-magic-btn');
// // console.log('magicBtn:', magicBtn);

// magicBtn.addEventListener('click', () => {
// const navEl = document.querySelector('.item');
// console.log('navEl:', navEl);

// const navEls = document.querySelectorAll('.item');
// console.log('navEls:', navEls);

// const ulByIdCategories = document.querySelector('#categories');
// console.log('ulByIdCategories:', ulByIdCategories);
// });

//---------------------
// 02-properties
//---------------------

// const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//     const imgEl = document.querySelector('.img-js-this');
//     console.log('imgEl', imgEl);
//     console.log(imgEl.querySelector('a'));
    
//     imgEl.src = "./images/this1.png";
//     imgEl.alt = 'JS this';
//     console.log('', imgEl.src);
//     console.log('imgEl', imgEl);
// });

// const task01Title = document.querySelectorAll('h2');
// console.log('task01Title', task01Title);
// console.log('Quantity of h2 elements in Task01 =', task01Title.length);

// const task01Ul = document.querySelectorAll('ul');
// console.log('task01Ul', task01Ul);
// console.log('Quantity of ul elements in Task01 =', task01Ul.length);

// const task01Li = document.querySelectorAll('li');
// console.log('task01Li', task01Li);
// console.log('Quantity of li elements in Task01 =', task01Li.length);

// const firstTextH2 = document.querySelector('h2');
// console.log('firstTextH2', firstTextH2);
// console.log(firstTextH2.textContent);
// console.log(firstTextH2.tabIndex);
// firstTextH2.textContent = 'Wild Animals';

// const divImgAThis = document.querySelector('.img-js-this');
// console.log(divImgAThis.childNodes);
// const aThisObj = divImgAThis.childNodes[2];

// const aStyleObj = aThisObj.getAttribute('style');
// console.log(aStyleObj);

// console.log(aThisObj.style['top'], aThisObj.style['left']);
// aThisObj.style['top'] = '300px';
// aThisObj.style['left'] = '300px';
// console.log(aThisObj.style['top'], aThisObj.style['left']);
// console.log(aThisObj.getAttribute('style'));

// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions);
// console.log(actions[0].dataset);
// console.log(actions[0].dataset.action);
// console.log(actions[1].dataset.action);
// console.log(actions[2].dataset);
// console.log('action =', actions[2].dataset.action, '; color =', actions[2].dataset.color, ';');

// magicBtn.addEventListener('click', () => {
//     const inputEl = document.querySelector('.js-input-text');
//     console.log(inputEl);
//     console.log(inputEl.value);
//     inputEl.value = '';
// });

//---------------------
// 03-classlist
//---------------------

const magicBtn = document.querySelector('.js-magic-btn');

magicBtn.addEventListener('click', () => {
    const navEl = document.querySelector('.title-categorie');
    console.log(navEl.classList);
    navEl.classList.add('animals-class', 'first-class');   
});

const removeBtn = document.querySelector('.remove-class');

removeBtn.addEventListener('click', () => {
    const navEl = document.querySelector('.title-categorie');
    console.log(navEl.classList);
    navEl.classList.remove('first-class');
});