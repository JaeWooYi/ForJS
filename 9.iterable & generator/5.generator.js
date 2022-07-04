// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

// 위와 비교해봐(generator 비교)
// 아래가 훨씬 간편하지?

// *을 붙여야 generator임을 알 수 있다.
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      // yield -> 사용자가 원할때까지 기다렸다가 하나하나씩 리턴해준다.
      console.log(i);
      yield i ** 2;
    }
  } catch (error) {
    console.log('error!!!!!');
  }
}
var multiple = multipleGenerator();
var next = multiple.next();
//console.log(next);
console.log(next.value, next.done);

console.log();

// 리턴을 하는순간 아래거 안나오고 끝나는걸 알수 있다 -> undifined true 나와 콘솔창에
//multiple.return();
// 바로 크래쉬 떠 -> multipleGenerator()안에 try, catch문을 쓰자
multiple.throw('Error');

console.log();

// 이게 나오고 싶으면 35~38줄 주석 쳐야겠지?
next = multiple.next();
console.log(next.value, next.done);

// 왠만하면 사용할일 없대 쌤이. 우리가 직접 만들어서 이렇게(직접구현)
