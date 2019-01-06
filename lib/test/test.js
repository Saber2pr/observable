"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../core/Observable");
new Observable_1.Observable({ value: 100 })
    .pipe(function (state) { return ({ value: state.value + 233 }); })
    .subscribe(function (state) { return console.log(state); });
