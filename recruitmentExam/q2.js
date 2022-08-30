var container = Array();
for (var i = 0; i < 5; i++) {
  container.push(function () {
    console.log(`나는 ${i}번 입니다.`);
  });
}
container[3]();
