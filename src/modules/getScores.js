import axios from 'axios';

const fetchScores = async () => {
  try {
    const response = await axios.get('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8Fh2sjTjkZd6snt2gt4J/scores');
    return response.data.result;
  } catch (error) {
    const display = document.querySelector('#display-scores');
    display.innerHTML = error;
    throw error;
  }
};

const refreshButton = document.getElementById('refresh');
const scoresList = document.getElementById('display-scores');

refreshButton.addEventListener('click', async () => {
  const gameId = '8Fh2sjTjkZd6snt2gt4J';
  const scores = await fetchScores(gameId);

  scoresList.innerHTML = '';
  scores.forEach((score, index) => {
    const li = document.createElement('li');
    li.innerText = `${score.user}: ${score.score}`;
    if (index % 2 === 1) {
      li.style.backgroundColor = '#e9e9e9';
    }
    scoresList.appendChild(li);
  });
});

export default fetchScores;