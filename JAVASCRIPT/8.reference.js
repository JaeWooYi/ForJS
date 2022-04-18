// ------------------------
// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a;
console.log(a);
console.log(b);

console.log();

b = 2;
console.log(a);
console.log(b);
// ------------------------

console.log();

// ------------------------
// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
    name : 'apple',
    color : 'red',
    display : '🍎'
}
let orange = apple;
console.log(apple);
console.log(orange);

console.log();

orange.name = 'orange';
console.log(apple.name);
console.log(orange.name);
// 마지막 apple에 orange들어간거 터미널을 통해 확인해봐.
// 원시타입과 객체타입의 메모리저장 방식을 잘 생각해.
// ------------------------
