import axios from 'axios';

const createGame = async () => {
  try {
    const response = await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
      name: 'connect four',
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 201) {
      const form = document.getElementById('form');
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const user = document.querySelector('#name').value;
        const score = document.querySelector('#score').value;
        await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8Fh2sjTjkZd6snt2gt4J/scores', {
          user,
          score,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        form.reset();
      });
    }
  } catch (error) {
    const display = document.querySelector('#display-scores');
    display.innerHTML = error;
  }
};

export default createGame;
