const templates = require("../");

console.log(templates("class-export", "MyClass"));
// "use strict"
//
// module.exports = class MyClass {
//     /**
//      * MyClass
//      * Sample description
//      *
//      * @name MyClass
//      * @function
//      * @param {Object} options An object containing the following fields:
//      *
//      *  - `fieldOne` (Number): Any number (default: `42`).
//      *
//      * @return MyClass The `MyClass` instance.
//      */
//     constructor (options) {
//         /* do something */
//     }
// };

console.log(templates("function-export", "foo"));
// "use strict"
//
// /**
//  * foo
//  * Sample description
//  *
//  * @name foo
//  * @function
//  * @param {Number} a Param descrpition.
//  * @param {Number} b Param descrpition.
//  * @return {Number} Return description.
//  */
// module.exports = function foo (a, b) {
//     return a + b;
// };

console.log(templates("example", "foo"));
// "use strict";
//
// const foo = require("../lib");
//
// console.log(foo());
