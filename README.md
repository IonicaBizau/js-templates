# js-templates [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/js-templates.svg)](https://www.npmjs.com/package/js-templates) [![Downloads](https://img.shields.io/npm/dt/js-templates.svg)](https://www.npmjs.com/package/js-templates) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Generate JS code templates.

## Installation

```sh
$ npm i --save js-templates
```

## Example

```js
const templates = require("js-templates");

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
```

## Documentation

### `jsTemplates(type, name)`
Generate stringified templates.
The first argument is the template name. The next arguments are passed to
the libraries handling the templates.

#### Params
- **String** `type`: The template name.
- **String** `name`: The library name (rendered in the template).

#### Return
- **String** The rendered template code.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md