// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않아.. 아래가 그 예시야
// 상태변경이 필요한 경우에는, 새로운 상태를(Object, 값) 만들어서 반환 해야 한다.

// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사(값 자체가 아니라 메모리 주소가 전달)

function distplay(kkk) {
  kkk = 10; // 전달받은 인자의 값을 바꿔주면 뭘 넣던 10이 나오겠지? -> 안 좋은거야
  console.log(kkk);
}
const value = 5;
distplay(value);
console.log(value);

console.log();

// 심각한 예제
function displayObj(obj) {
  obj.name = 'asshole'; // 1. 여기서 함부로 바꿔버림 ❌❌❌❌❌❌❌❌❌❌❌❌(하지마)-> 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 안했으면 좋겠어.
  console.log(obj);
}
const greetings = {
  name: 'YJW',
  age: 10,
  nick: 'Ediot',
};
displayObj(greetings);
console.log(greetings); // 2. 그 결과 greetings에 name이 영원히 바뀌어 버린것을 알 수 있음.

console.log('------');

// 하고 싶다면
function changeName(obj) {
  // 이렇게 함수 이름에 변경할거라고 정확히 명시
  return { ...obj, name: 'Very Ediot', age: 11, nick: '병신' }; // -> {} : 오브젝트 리터럴을 만드는 순간 새로운 오브젝트를 만들어준다
}
console.log(changeName(greetings));
