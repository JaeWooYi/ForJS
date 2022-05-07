/**
 * 정직원과 파트타임직원을 나타낼수 있는 클래스를 만들기
 * 직원들의 정보 : 이름, 부서, 한달 근무 시간
 * 매달 직원들의 정보를 이용해서 한달 월급 게산
 * 정직원은 시간당 10000원
 * 파트타임 직원은 시간당 8000원
 */

// ellie의 답
class Employee {
  constructor(name, department, hourWork, payRate) {
    this.name = name;
    this.department = department;
    this.hourWork = hourWork;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hourWork * this.payRate;
  }
} //

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hourWork) {
    super(name, department, hourWork, FullTimeEmployee.PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hourWork) {
    super(name, department, hourWork, PartTimeEmployee.PAY_RATE);
  }
}

const ellie = new FullTimeEmployee('ellie', 's/w', 30);
console.log(ellie);
console.log(ellie.calculatePay());
const bob = new PartTimeEmployee('bob', 's/w', 20);
console.log(bob);
console.log(bob.calculatePay());

console.log('#########################################################');
/**
 * It's me
 * 1. 정직원과 파트타임직원 클래스 만들기
 * 2. 생각해보니까 사용 메서드가 같네? 상속을 통해야 할것 같아
 * 3. 오버라이딩도 사용할래.
 */

class ERP {
  constructor(name, department, workTime) {
    this.name = name;
    this.department = department;
    this.workTime = workTime;
  }
  salary() {
    const sal = this.workTime * 10000;
    console.log(sal);
  }
}

// 정규직 YJW의 경우
class FullTime extends ERP {}
const fullTimer = new FullTime('YJW', 'Dev Team', 209);
console.log(fullTimer);
fullTimer.salary();

console.log('------------------------------------------');

// 비정규직 JWY의 경우
class PartTime extends ERP {
  salary() {
    const sal = this.workTime * 50;
    console.log(sal);
  }
}
const partTimer = new PartTime('JWY', 'Slave Team', 720);
console.log(partTimer);
partTimer.salary();
