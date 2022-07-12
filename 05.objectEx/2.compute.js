const obj = {
  myName: 'KKK',
  age: 60,
};

// 코딩하는 시점에서 정적으로 접근이 확정됨
obj.name;
obj.age;

// but, 대괄호로 쓴다면 동적으로 속성에 접근 가능 -> 뭔말이야.
function getValue(obj, key) {
  // return obj.key; // 이렇게 하면 위 obj안에 key라는 이름의 key값을 찾는거야
  return obj[key]; // 이렇게 해야지 key를 찾아
}

console.log(getValue(obj, 'myName'));

console.log();

// key, value 추가하는 함수도 만들어보자
function addKNV(obj, key, value) {
  obj[key] = value;
}
addKNV(obj, 'display', '🥲');
console.log(obj.display);

console.log();

// 삭제하는 함수를 만들어보자
function delKey(obj, key) {
  delete obj[key];
}
delKey(obj, 'display');
console.log(obj);
