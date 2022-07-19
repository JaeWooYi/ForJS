// 주석 Comments
// 한줄 짜리 주석 -> //
// TODO(JW) -> 해야 할것들, 남아 있는 것들 작성

/**
 * 주석은 코드 자체를 설명하는 것이 아니라
 * 왜(WHY), 어떻게(HOW)를 설명하는 것이 좋다
 * (단, 정말 필요한 경우에만)
 */

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc를 사용하면 좋다 -> url : https://jsdoc.app/
// 위 유알엘 참고해

// Ex) /** 쓰고 엔터만 치면 되.
/**
 * 주어진 두 인자 더한 값을 반환함
 * @param {*} a -> 숫자1
 * @param {*} b -> 숫자2
 * @returns -> a와 b를 더한 값.
 */
function add(a, b) {
  return a + b;
}
