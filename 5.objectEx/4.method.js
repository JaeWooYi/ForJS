const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name} : 🍎`); // this -> 내 자신의 이름
  },
};

apple.display();
