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

console.log(_.divide(7,2));

// const sum = _.add(7, 7);
// console.log("sum", sum);

const divideArrayToParts = _.chunk(['a', 'b', 'c', 'd'], 5);
console.log("divideArrayToParts", divideArrayToParts);