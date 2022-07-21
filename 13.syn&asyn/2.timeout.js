function excute() {
  console.log('Hello1');
  setTimeout(() => {
    console.log('Hello2'); // setTimeout을 통해 3초 뒤 출력 됨을 알 수 있다.
  }, 3000);
  console.log('Hello3');
}

excute();
