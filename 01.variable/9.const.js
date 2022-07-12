// let 재할당이 가능 
let a = 1;
console.log(a);
a = 2;
console.log(a);
console.log();


// const 재할당이 불가능
// const -> 상수 or 상수변수(변수)
const text = 'hello';
console.log(text);
// text = 'hi';  // 불가능 아래처럼 에러
// console.log(text);  // -> 에러

// 1. 상수를 사용할때는 변수이름 대문자로!
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수로 사용 가능
const apple = {
    name : 'apple',
    color : 'red',
    display : '🍎'
};
console.log(apple);
// 아래처럼 재할당 불가
// apple = {}
apple.color='yello';
console.log(apple.color); // -> 얘는 왜 되는거야? 객체는 힙이라는 공간에 저장되어있고 apple은 그냥 오브젝트가 보관된 메모리 주소를 가르키고 있음.
                          // 그 주소를 따라가서 오브젝트 안에 데이터를 바꾸게 됨. 그저 애플에 다른 메모리 주소를 담을 수 없는것 뿐이다. -> 컨스트는 재할당'만' 불가능하다는 결론

