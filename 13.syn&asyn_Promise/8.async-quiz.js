function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  //   return Promise.resolve(`🪴 => 🐓`);
  return Promise.reject(new Error('치킨 못 가져옴!'));
}

function makeFriedEgg() {
  return getChicken()
    .catch(error => '🐔')
    .then(fetchEgg)
    .then(fryEgg);
  // .then(result => {
  //   console.log(result);
  //   return result;
  // });
}

makeFriedEgg().then(console.log);

// 위 함수에서 땡땡에 마우스 눌러서 컨버트 async function으로 바꾼거
async function makeFriedEgg2() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch (error) {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}
makeFriedEgg2().then(console.log);
