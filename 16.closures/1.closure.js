const text = 'text';
function ex() {
  console.log(text);
}
ex();

console.log();

// function outer() {
//   const x = 0;
//   function inner() {
//     console.log(`inside inner : ${x}`);
//   }
//   inner();
// }
// outer();

// 위와 같음
function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner : ${x}`);
  }
  return inner;
}
const fun1 = outer();
fun1();
