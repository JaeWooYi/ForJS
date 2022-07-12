// Objcet literal{key : value}
// new Object()
// Object.create();

// kye -> 문자, 숫자, 문자열, 심볼 등등 들어갈 수 있다
// value -> 원시값, 객체, 함수 등등 들어갈 수 있다

let apple = {
  name: 'apple!', // 근데 솔직히 대부분은 깔끔하게 이 주석에 있는 줄처럼 줄맞춰서 만드는게 좋다. -> 특수한 경우가 아니라면
  'name-2': 'What a apple', // 위와 같은 문자열 이지만 -(대시)를 쓸 수 있다. -> ''를 통해서
  012: 1,
  ['name-2']: '❌', // 대괄호도 가능 -> name-2의 'What a apple'에 새로운 값 '❌' 대입
};

console.log(apple);
console.log();
// 속성 , 데이터에 접근하기 위해서는
// Ex) apple.name 이런식으로 접근 -> 마침표 표기법이라고 불러
console.log(apple.name);
console.log(apple['name-2']); // -> apple['name-2'] 이런건 대괄호 표기법(bracket notation)
// 점말고 대괄호로만으로도 접근 가능해, 아래처럼 말이지
apple[012];

console.log();

// 속성 추가도 가능해.
apple.good = '👍🏻';
console.log(apple.good);
console.log(apple['good']); // -> 대괄호로 찍고 싶을땐 항상 문자열로 감싸자. ('')

console.log();
// 속성 추가가 가능하다면 삭제 역시 가능하겠지?
delete apple.good;
