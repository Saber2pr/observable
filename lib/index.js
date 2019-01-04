"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./core/Observable"));
var Observable_1 = require("./core/Observable");
new Observable_1.Observable({ value: 100 })
    .pipe(function (state) { return ({ value: state.value + 233 }); })
    .subscribe(function (state) { return console.log(state); });
