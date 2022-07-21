/**
 * try - catch - finally
 */

function readFile(path) {
  throw new Error('파일 경로를 찾을 수 없습니다.');
  return 'File Contents';
}

function processing(path) {
  var content;

  try {
    content = readFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    content = '기본 내용';
  } finally {
    console.log(
      '성공하든 실패하든 마지막으로(finally) 리소스를 정리 할수 있다.'
    );
  }

  var result = 'Hello : ' + content;
  return result;
}

var result1 = processing('경로');
console.log('result1 -> ' + result1);
