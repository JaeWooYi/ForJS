const fruit = ['π', 'π', 'π', 'π₯'];

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit.length);
console.log();

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

console.log();

// μΆκ° / μ­μ  ( μμ’μ λ°©λ² )
fruit[4] = 'π'; //  μ€κ°μ΄ λΉκ±°λ, μ΄λ―Έ μλκ±°μ ν μλ μμΌλκΉ λ³λ‘ μμ’μ λ°©λ²
// fruit[fruit.length] = 'π'   // μ λ νκ³  μΆμΌλ©΄ μ΄λ κ² ν΄
console.log(fruit);

console.log();

delete fruit[4];
console.log(fruit); // μ­μ νκ³  λ¨μμλκ±° λ³΄μ΄μ§? λ± λ΄λ μμ’μ λ³΄μ¬
