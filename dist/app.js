"use strict";
let fname = "jay";
let age = 30;
let isWorking = false;
console.log(`name =  ${fname.toUpperCase()}`);
//any & unknow
let lname = "jay";
lname = false;
function formatNumber(num) {
    return num.toFixed(2);
}
let amount = 50.12345;
formatNumber(amount);
let money = 50.1234;
money = "50.12345";
if (typeof money === "number") {
    console.log(formatNumber(money));
}
//type assi
