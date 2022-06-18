/**
 * 정직원과 파트타임직원을 나타낼수 있는 클래스를 만들기
 * 직원들의 정보 : 이름, 부서, 한달 근무 시간
 * 매달 직원들의 정보를 이용해서 한달 월급 게산
 * 정직원은 시간당 10000원
 * 파트타임 직원은 시간당 8000원
 */
class Erp {
  constructor(name, department, workTime, division) {
    this.name = name;
    this.department = department;
    this.workTime = workTime;
    this.division = division;

    if (division == '정규직') {
      this.salaryFull();
    } else if (division == '비정규직') {
      this.salaryPart();
    }
  }
  salaryFull(name, workTime) {
    let sal = this.workTime * 10000;
    console.log(this.name + '의 급료는 ' + sal + '입니다');
  }
  salaryPart(name, workTime) {
    let sal = this.workTime * 8000;
    console.log(this.name + '의 급료는 ' + sal + '입니다');
  }
}
var employee1 = new Erp('aa', 'Apart', 10, '정규직');
var employee2 = new Erp('bb', 'Bpart', 500, '비정규직');

console.log();
console.log(
  '------------------------------------------------------------------------------------------------------------------------'
);
console.log();
