const fruit = ['π₯', 'π', 'π', 'π', 'π'];
fruit.forEach(function (value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
});

console.log();
console.log('-----------------------');
console.log();

const item1 = {
  name: 'item1',
  display: 'π',
};
const item2 = {
  name: 'item2',
  display: 'π£',
};
const item3 = {
  name: 'item3',
  display: 'π₯Ή',
};
var itemAll = [item1, item2, item3];
console.log(itemAll);

console.log();
console.log('-----------------------');
console.log();

for (var i = 0; i < itemAll.length; i++) {
  if (itemAll[i].display == 'π£') {
    console.log(i + 'μΈλ±μ€ : fuck you');
  } else {
    console.log(i + 'μΈλ±μ€ : not correct');
  }
}

console.log();
console.log('-----------------------');
console.log();

var find1 = itemAll.find(value => {
  return value.display == 'π£';
});
console.log(find1);

console.log();
console.log('-----------------------');
console.log();

var find2 = itemAll.findIndex(value => {
  return value.display == 'π£';
});
console.log(find2);

console.log();
console.log('-----------------------');
console.log();

const someEx = itemAll.some(item => item.display === 'π₯Ή');
console.log(someEx);

const every = itemAll.every(item => item.display == 'π£');
console.log(every);

var filter = itemAll.filter(item => item.display == 'π£');
console.log(filter);
