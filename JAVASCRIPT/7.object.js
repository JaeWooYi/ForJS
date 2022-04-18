let name = 'apple';
let color = 'red';
let display = '🍎';

let orangeName = 'orange';
let orangeColor = 'yellow';
let orangeDisplay = '🍊';

// 과일들이 많아질수록 이짓거리를 다해야해? 변수이름 일일히 다 하기 불편하자나 -> 그룹화(패키지화)
let apple = {
    name : 'redApple',
    color : 'realRed',
    display : '🍎'
}

let orange = {
    name : 'yelloOrange',
    color : 'realYellow',
    display : '🍊'
}

// 객체 다나오기.
console.log(apple);
console.log(orange);

console.log();

// 각각 나오기.
console.log(apple.name + ', ' + apple.color + ', ' + apple.display);
console.log(orange.name + ', ' + orange.color + ', ' + orange.display);
