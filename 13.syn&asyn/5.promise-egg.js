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

fetchEgg('🐔') //
  .then(egg => console.log(egg));

getChicken() //
  .catch(error => {
    console.log(error.name);
    return '🐔';
  })
  .then(chicken => {
    return fetchEgg(chicken);
  }) //
  .then(egg => fryEgg(egg)) //
  .then(friedEgg => console.log(friedEgg));

//----위를 깔끔하게-----
getChicken()
  .catch(error => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
