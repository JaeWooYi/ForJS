// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
  //console.log(styles); // -> 변수가 아니기 때문에 접근이 불가능
}
changeColor(prop);
