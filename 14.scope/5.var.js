/**
 * var의 특징
 * -> 일반 코딩 방식과 어긋나는게 많다.
 * -> 코드의 가독성과 유지보수성이 좋지 않다.
 */

/**
 * 1. 변수 선언하는 키워드 없이 선언 & 할당이 가능하다.
 * 선언인제 재할당인지 구분이 어렵다.
 */
radiation = '☢︎';
console.log(radiation); // 이렇게 해도 출력은 되네?

console.log();

/**
 * 2. 선언한고 똑같은 이름으로 또 선언해도 아무런 에러도 안나네?
 * 중복선언!! -> 무엇이 문제냐? 협업할때 타 팀원이 같은이름으로 변수 만들면 체크하기 까다롭겠지?
 */
var biochemistry = '☣︎';
var biochemistry = '☣︎';
console.log(biochemistry);

console.log();

/**
 *  뭐냐 블럭 밖에서 출력했는데 왜 블럭 안에꺼 나와
 *  블록레벨 스코프 안된다!
 */
var apple = '🍎';
{
  var apple = 'apple!';
  {
    var apple = '🍏';
  }
}
console.log(apple);

console.log();

/**
 * 웃긴게 함수레벨 스코프는 지원이 된다.
 */
function example() {
  var bat = '🦇';
}
// example(bat);
