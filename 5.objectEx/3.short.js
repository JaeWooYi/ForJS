const x = 0;
const y = 0;
// const coordinate = {
//   x: x,
//   y: y,
// };

// 이름이 같다면 이렇게 생략해도 되
const coordinate = {
  x,
  y,
};

console.log(coordinate);

console.log();

// 함수도 가능하네
function makeObj(name, age) {
  return {
    name,
    age,
  };
}
console.log(makeObj('YYY', 100));
