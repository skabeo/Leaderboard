export default class Game {
  constructor() {
    this.board = JSON.parse(localStorage.getItem('scores')) || [];
  }

  add(name, score) {
    this.board.push({ name, score });
    localStorage.setItem('scores', JSON.stringify(this.board));
  }

  render() {
    const gameList = document.querySelector('#display-scores');
    gameList.innerHTML = '';

    if (this.board.length === 0) {
      const li = document.createElement('li');
      li.innerHTML = 'No recent score';
      li.classList.add('empty');
      gameList.appendChild(li);
    }

    for (let i = 0; i < this.board.length; i += 1) {
      const board = this.board[i];
      const li = document.createElement('li');
      li.innerHTML = `${board.name} ${board.score}`;
      gameList.appendChild(li);

      if (i % 2 === 1) {
        li.style.backgroundColor = '#e9e9e9';
      }
    }
  }
}

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  const gameList = document.querySelector('#display-scores');
  gameList.innerHTML = 'No recent score';
  gameList.classList.add('empty');
  localStorage.clear();
});
