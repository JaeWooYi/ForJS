let mySelf = {
  name: 'KKK',
  age: 10,
  nick: 'YYY',
};

function allChange(obj) {
  //   mySelf = { age: 100 };    // age : 100만 남기고 다 지워 버림
  //   console.log(mySelf);
  return { ...obj, nick: 'ZZZ' };
}
console.log(allChange(mySelf));
console.log(mySelf); // 이봐 원본 그대로야
// 왠줄 알아? return할 때, 새로운 오브젝트를 만들어서야
