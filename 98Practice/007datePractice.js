// var d = new Date();
// var year = d.getFullYear();
// var month = d.getMonth();
// var day = d.getDay();

// var fullDay = new Date(year, month, day).toLocaleDateString();
// var kk = fullDay.slice(0, 11);
// console.log(kk);

var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDay();

var fullDay = new Date(year, month, day).toISOString();
var kk = fullDay.slice(0, 10);
console.log(kk);
