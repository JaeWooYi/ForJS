const a = 5;
const b = 10;
// const murge = {
//     a : 5,
//     b : 10
// }    // -> 이런게 만들고 싶다면

function makeObj(test1, test2) {
  return {
    test1,
    test2,
  };
}
let makeObjTest = makeObj('good1', 'good2');
console.log(makeObjTest);

console.log();

let apple = {
  name: 'apple',
  display: '🍎',
  view: function (y, z) {
    return y + z;
  },
};
console.log(apple);
let numnum = apple.view(10, 30);
console.log(numnum);

console.log();
