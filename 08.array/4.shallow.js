const pizza = {
  img: '🍕',
  price: '100won',
};
const apple = {
  img: '🍎',
  price: '200won',
};
const bone = {
  img: '🦴',
  price: '10000000000000won',
};
const store1 = [pizza, apple];
const store2 = Array.from(store1);
console.log('store1 -- ', store1);
console.log('store2 -- ', store2);
console.log();
console.log('store2에 bone추가해서 출력해봐');
store2.push(bone);
console.log('store2 -- ', store2);

console.log();

console.log(
  '피자의 가격을 인상하고 store1과 store2를 출력해봐 무슨 변화가 생겼을지 생각해보고'
);
pizza.price = '10000won';
console.log(store1);
console.log(store2);
console.log(
  'store1, store2 배열에서 피자의 가격이 바뀌어있네? -> 이걸 shallow copy라고 한데'
);

/**
 * 얕은 복사(shallow copy) - 객체는 메모리 주소가 전달 되기 때문에
 * 자바스크립트에서 복사 할떄는 항상 얕은 복사가 이루어 진다.
 */
