// ------------------------------------------------------------------------
// CW-7

// !!!!!!!!!!!!!!!!!!!!!!!!
// Add library by cdnjs.com

// https://lodash.com/
// https://cdnjs.com/libraries/lodash.js
// url
// https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// script tag
//  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
// SRI hash
// sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==

// html example:

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>Document title</title>
//   </head>
//   <body>
//     <!-- HTML-markup -->

//     <!-- Lodash library script file -->
//     <script
//       async
//       src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
//       integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
//       crossorigin="anonymous"
//       referrerpolicy="no-referrer"
//     ></script>
//     <!-- Your script file -->
//     <script defer src="path/to/script.js"></script>
//   </body>
// </html>

// END!!!!!!!!!!!!!!!!!!!!!


// !!!!!!!!!!!!!!!!!!!!!!!!
// Using lodash library
console.log('Repeating executed by 2 scripts adding in html!!!');

console.log("_.divide(7,2) = ", _.divide(7,2));

const sum = _.add(7, 7);
console.log("sum = _.add(7, 7) = ", sum);

const divideArrayToParts = _.chunk(['a', 'b', 'c', 'd'], 3);
console.log("_.chunk(['a', 'b', 'c', 'd'], 3)", divideArrayToParts);
console.log("divideArrayToParts[0]", divideArrayToParts[0]);
console.log("...divideArrayToParts", ...divideArrayToParts);

console.log('--------------------------');
// const stamp = "dd.mm.yyyy";
// _.defer(function(stamp) {
//   console.log(_.now() - stamp);
// }, _.now());

const years = (_.now() / 1000 / 60 / 60 / 24 / 365);
const roundedYears = Math.floor(years);
console.log("years", years);
const months = ((_.now() / 1000 / 60 / 60 / 24 / 365) - roundedYears) * 365 / 30;
const roundedMonths = Math.floor(months);
console.log("months", months);
const days = (years - roundedYears) * 365;
console.log("days", days);

const hours = Math.floor(_.now() / 1000 / 60 / 60 );
const minutes = Math.floor(_.now() / 1000 / 60 );
const seconds = (_.now() / 1000 / 60 / 60 / 24 / 365);

console.log(roundedYears + ' years ' + roundedMonths + ' months ' + days + ' days' + ' from 01.01.1970'); // _.now() - Gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).

console.log('');