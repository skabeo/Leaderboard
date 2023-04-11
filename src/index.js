import './index.css';
import Game from './modules/display.js';

const myDisplay = new Game();
myDisplay.render();

const addScores = document.querySelector('#submit');
addScores.addEventListener('click', (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('#name');
  const scoreInput = document.querySelector('#score');
  const name = nameInput.value;
  const score = scoreInput.value;
  if (name !== '' && score !== '') {
    myDisplay.add(name, score);
    myDisplay.render();
    nameInput.value = '';
    scoreInput.value = '';
  }
});
