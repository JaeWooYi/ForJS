function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => π³`);
}

function getChicken() {
  //   return Promise.resolve(`πͺ΄ => π`);
  return Promise.reject(new Error('μΉν¨ λͺ» κ°μ Έμ΄!'));
}

fetchEgg('π') //
  .then(egg => console.log(egg));

getChicken() //
  .catch(error => {
    console.log(error.name);
    return 'π';
  })
  .then(chicken => {
    return fetchEgg(chicken);
  }) //
  .then(egg => fryEgg(egg)) //
  .then(friedEgg => console.log(friedEgg));

//----μλ₯Ό κΉλνκ²-----
getChicken()
  .catch(error => 'π')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
