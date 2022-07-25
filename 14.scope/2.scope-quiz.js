{
  const x = 1;
  {
    const y = 2;
    console.log(x);
    console.log(y); // y는 여기서만 쓸 수 있다!!
  }
  console.log(x);
  //   console.log(y);  // y는 여기서는 쓸 수 없다!!
}

console.log();
console.log('-------------------------');
console.log();

const text = 'global1'; // 전역 변수, 전역 스코프(글로벌 변수, 글로벌 스코프)
{
  const text = 'global2'; // 지역 변수(로컬변수), 지역 스코프(지역 변수, 지역 스코프)
  {
    const text = 'global3';
    console.log(text); // 블록 안에서의 text를 찾는군 -> 하지만 블록 안에서 선언된 변수가 없다면 밖에 text를 찾아.
  }
}
