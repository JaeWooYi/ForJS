let name = 'apple';
let color = 'red';
let display = '๐';

let orangeName = 'orange';
let orangeColor = 'yellow';
let orangeDisplay = '๐';

// ๊ณผ์ผ๋ค์ด ๋ง์์ง์๋ก ์ด์ง๊ฑฐ๋ฆฌ๋ฅผ ๋คํด์ผํด? ๋ณ์์ด๋ฆ ์ผ์ผํ ๋ค ํ๊ธฐ ๋ถํธํ์๋ -> ๊ทธ๋ฃนํ(ํจํค์งํ)
let apple = {
    name : 'redApple',
    color : 'realRed',
    display : '๐'
}

let orange = {
    name : 'yelloOrange',
    color : 'realYellow',
    display : '๐'
}

// ๊ฐ์ฒด ๋ค๋์ค๊ธฐ.
console.log(apple);
console.log(orange);

console.log();

// ๊ฐ๊ฐ ๋์ค๊ธฐ.
console.log(apple.name + ', ' + apple.color + ', ' + apple.display);
console.log(orange.name + ', ' + orange.color + ', ' + orange.display);
