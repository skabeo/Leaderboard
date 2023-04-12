import './index.css';
import Game from './modules/display.js';
import createGame from './modules/generateId.js';
import fetchScores from './modules/getScores.js';

const myDisplay = new Game();
myDisplay.render();

createGame();
fetchScores();
