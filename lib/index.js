"use strict";

const sliced = require("sliced");

const templates = {
    "class-export": require("js-templates.class-export")
  , "function-export": require("js-templates.function-export")
};

module.exports = function (type, name) {
    let tem = templates[type];
    if (typeof tem === "function") {
        return tem.apply(this, sliced(arguments, 1));
    }
};

module.exports._ = templates;
