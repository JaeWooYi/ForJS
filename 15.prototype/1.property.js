const dog = {
  name: 'Mimi',
  display: '🐶',
};

console.log(Object.keys(dog)); // 키만
console.log(Object.values(dog)); // 밸류만
console.log(Object.entries(dog)); // 둘다

console.log();

// 키가 있는지 없는지 검사
console.log('name' in dog); // 도그라는 객체 안에 name이란 키가 있니?
console.log(dog.hasOwnProperty('name')); // 위와 동일하지만 이게 더 길지?

console.log();

/**
 * 오브젝트 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
 */
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

console.log('-----------------------------');

const des = Object.getOwnPropertyDescriptor(dog, 'name'); // 특정 키에 해당하는것만 받아오고 싶다면 -> 위는 전부 s 붙었자나
console.log(des);

console.log();

// defineProperty -> 수정할때 쓰는 함수
Object.defineProperty(dog, 'name', {
  value: 'Nini',
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log('defineProperty -> 수정할때 쓰는 함수');
console.log(dog.name);
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));
// 수정하니까 위 함수에서 아무것도 포함이 되지 아니 하는구나. -> false로 바꿨자나
delete dog.name; // -> 이거 조차도 안돼.
console.log(dog.name); // -> 봐봐 ㅋㅋㅋ 나오자나

console.log('-----------------------------');
console.log();

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student);
