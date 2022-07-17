/**
 * Nullish Coalescing Operator
 * ES11에 추가됨
 * ??, null, undefined
 * || falshy한 경우 설정(할당) : 0, -0, ''
 */
var num = 0;
console.log(num || '-1'); // 0은 false라서 -1이 나오는거양
console.log(num ?? '-1'); // ??연산자를 사용해서 null과 undefined임을 명시
