for (let i = 0; i < 5; i = i + 2) {
  console.log(i);
}

console.log();

for (let i = 1; i < 6; i = i + 2) {
  console.log(i);
}

console.log();

for (let i = 1; i < 4; i++) {
  for (let j = 1; j < 5; j++) {
    console.log(i + '____' + j);
  }
}

console.log();

let num = 5;
while (num > 0) {
  console.log(num);
  num--;
}

console.log();

let bool = true;
let i = 0;
while (bool) {
  console.log('alive');
  console.log('i : ' + i);
  i++;

  if (i == 2) {
    console.log('kill');
    break;
  }
}
