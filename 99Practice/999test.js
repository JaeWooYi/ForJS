const arr1 = [1, 3, 5, 7, 9];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

function inter(arraykk1, arraykk2) {
  const newArr = [];
  for (let i = 0; i < arraykk1.length; i++) {
    if (arraykk2.includes(arraykk1[i])) {
      newArr.push(arraykk1[i]);
    }
  }
  return newArr;
}

const test = inter(arr1, arr2);
console.log(test);
