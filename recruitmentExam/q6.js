var value = 1;

var obj = {
  value: 100,
  foo: function () {
    console.log("method's this window: ", this === value);
    console.log("method's this.value: ", this.value); // 100
    setTimeout(function () {
      console.log("callback's this window: ", this === value);
      console.log("callback's this.value: ", this.value); // 1
    }, 100);
  },
};
var foo = obj.foo;
foo();

//-----------------------------------------

// 이게 원래문제인데 window를 value로 고쳣어
// var value = 1;

// var obj = {
//   value: 100,
//   foo: function () {
//     console.log("method's this window: ", this === window);
//     console.log("method's this.value: ", this.value); // 100
//     setTimeout(function () {
//       console.log("callback's this window: ", this === window);
//       console.log("callback's this.value: ", this.value); // 1
//     }, 100);
//   },
// };
// var foo = obj.foo;
// foo();
