// Boolean
const isTrue = new Boolean(true); // 객체를 사용하면 메모리를 더 사용 하기때문에 굳이 이렇게 쓰지는 않음
const isTrue2 = true; // 이렇게 바로 쓰지

console.log(isTrue.valueOf());

/**
 * Falsy
 * 0
 * -0
 * null
 * Nan
 * undefined
 * ''
 */

/**
 * Truthy
 * 1
 * -1
 * '0'(값이 들어있는 문자열)
 * []
 * {}
 */
