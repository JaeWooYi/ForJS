let string = "Hello";
console.log(string);

string = `HI!`;
console.log(string);

string = '"hi"';
console.log(string);

string = 'HIHI! \n KKK';    //  \n : 줄바꿈
console.log(string);

string = "Hey! \t I'm kkkk";    // \t : tap
console.log(string);

string = "Hey! \t I'm kkkk \\";    // \\ : \
console.log(string);

string = "Hey! \t I'm kkkk \u09AC";    // \u : 유니코드
console.log(string);

console.log();

// 템플릿 리터럴(Template litural) ->  ``
let id = 'YYY';
let greetings = '"hi",' + id + '🚑\n Have a good day!';
console.log(greetings);

console.log();

// \n이 필요없음 ``를 쓰면
greetings = `'HI!, ${id}'🚑     
Have a good day!`;
console.log(greetings);









