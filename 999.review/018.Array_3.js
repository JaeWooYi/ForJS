let radiation = {
  img: '☢︎',
  result: '☠︎',
};

let communism = {
  img: '☢︎',
  result: '☠︎',
};

let punishment = {
  img: '⚡︎',
  result: '☠︎',
};

let plus = [radiation, communism];
let plus2 = Array.from(plus);
console.log('plus--', plus);
console.log('plus2--', plus2);

console.log();

plus2.push(punishment);
console.log('changePlus2--', plus2);

console.log();

radiation.img = '☭';
console.log(radiation);
