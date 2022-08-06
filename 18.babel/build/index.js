/**
 * 사용법
 *
 * 터미널에서
 * ex)
 * 1. cd 18.참고
 * 2. npm init --yes
 * 3. npm install --save-dev @babel/core @babel/cli @babel/preset-env           --> 를 통해 설치
 * 4. 코드 작성 후
 * 5. package.json에 가서 -->  "test": "echo \"Error: no test specified\" && exit 1" 이 부분 지우고,
 * "build": "babel 2.index.js -w -o build/index.js"  --> 실행시킬 파일로 기입
 * 6. 터미널에 npm run build
 * 7. build파일 생길거야.
 * 8. 18.babel폴더에 babel.config.json을 만든다.
 * 9. babel.config.json여기에 preset적고(공식사이트에 있음) 셋팅
 * 10. 빌드 중지하고 다시 빌드 실행 (npm run build)하면 변환되는 것을 확인 할 수 있다.
 */

class Cat {}

console.log();

const hello = () => {
  console.log('hello');
};

console.log();
const yes = Promise.resolve('1');
