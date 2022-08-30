var increase1 = (function () {
  var counter = 0;
  return function () {
    return ++counter;
  };
})();
increase1();
increase1();
increase1();
console.log('increase1 : ', increase1());

function increase2() {
  var counter = 0;
  return ++counter;
}
increase2();
increase2();
increase2();
console.log('increase2 : ', increase2());
