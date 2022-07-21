function readFile(path) {
  if (path == null) {
    throw new Error('파일 경로를 찾을 수 없습니다.');
  }
  return 'File Contents';
}

function processing(path) {
  var content = readFile(path);
  var result = 'Hello : ' + content;
  return result;
}

var result1 = processing('경로');
console.log('result1 -> ' + result1);

// var result2 = processing();
// console.log('result2 -> ' + result2);
