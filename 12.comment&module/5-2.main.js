//import increase from './5-1.counter.js';  // 함수가 export default인 경우
// import { increase as increase2, getCount, count } from './5-1.counter.js'; // 함수가 export인 경우
import * as count12345 from './5-1.counter.js'; // 한번에 가져와서 객체처럼 사용 할 수 있다.

// increase2();
// increase2();
// increase2();
// increase2();
// increase2();

// const count1 = getCount();
// console.log('count1 -> ' + getCount());
// console.log('count1 -> ' + count1);

// console.log('5-1.counter에 있는 count변수 : ' + count); // 보통 변수는 export안해

count12345.increase();
count12345.increase();
count12345.increase();
count12345.increase();
count12345.increase();
console.log('count1 -> ' + count12345.count);
