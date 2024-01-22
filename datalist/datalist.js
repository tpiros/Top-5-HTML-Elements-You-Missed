const swCharacters = document.querySelector('#sw_character_pick');
const button = document.querySelector('button');
const result = document.querySelector('output');

button.addEventListener('click', (e) => {
  e.preventDefault();
  result.value = `You selected ${swCharacters.value}`;
});
