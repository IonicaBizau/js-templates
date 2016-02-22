"use strict";

const sliced = require("sliced");

const templates = {
    "class-export": require("js-templates.class-export")
  , "function-export": require("js-templates.function-export")
  , example: require("js-templates.example")
};

/**
 * jsTemplates
 * Generate stringified templates.
 * The first argument is the template name. The next arguments are passed to
 * the libraries handling the templates.
 *
 * @name jsTemplates
 * @function
 * @param {String} type The template name.
 * @param {String} name The library name (rendered in the template).
 * @return {String} The rendered template code.
 */
module.exports = function jsTemplates (type) {
    let tem = templates[type];
    if (typeof tem === "function") {
        return tem.apply(this, sliced(arguments, 1));
    }
};

module.exports._ = templates;
