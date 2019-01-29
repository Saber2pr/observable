"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../core/Observable");
var obs = new Observable_1.Observable({ value: 100 }).pipe(function (state) { return ({
    value: state.value + 233
}); });
new Promise(function (resolve) {
    obs.subscribe(function (state, pre) {
        console.log(state, pre);
        resolve();
    });
}).then(function () { return console.log('then', obs.getState()); });
console.log(obs.getState());
