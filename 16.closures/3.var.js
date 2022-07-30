// function loop() {
//   const array = [];
//   // var과 let의 차이점!
//   for (let i = 0; i < 5; i++) {
//     array.push(function () {
//       console.log(i);
//     });
//   }
//   return array;
// }

// const array = loop();
// array.forEach(func => func());

console.log();
console.log('-------var, let 차이점 봐봐-------');
console.log();

/**
 * var은 블록스코프가 없이 함수 스코프만 있기 때문에 결과가 다르다.
 */
function loop() {
  const array = [];
  // ----------------------------------- var i = 0;
  // var과 let의 차이점!
  // ----------------------------------- for (i = 0; i < 5; i++) {  -> 인것과 마찬가지다
  for (var i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach(func => func());
