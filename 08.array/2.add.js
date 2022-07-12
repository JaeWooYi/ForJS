const fruit = ['🍎', '🍌', '🍊', '🥚'];

// 배열 아이템을 참조하는 방법
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit.length);
console.log();

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

console.log();

// 추가 / 삭제 ( 안좋은 방법 )
fruit[4] = '🚑'; //  중간이 비거나, 이미 있는거에 할수도 있으니까 별로 안좋은 방법
// fruit[fruit.length] = '🚑'   // 정녕 하고 싶으면 이렇게 해
console.log(fruit);

console.log();

delete fruit[4];
console.log(fruit); // 삭제하고 남아있는거 보이지? 딱 봐도 안좋아 보여
