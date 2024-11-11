const grid = document.getElementById('grid');
const numbers = [1, 2, 3, 4, 1, 2, 3, 4].sort(() => 0.5 - Math.random());
let firstCard, secondCard;
let hasFlipped = false;

numbers.forEach(number => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.number = number;
  card.addEventListener('click', flipCard);
  grid.appendChild(card);
});

function flipCard() {
  this.textContent = this.dataset.number;

  if (!hasFlipped) {
    firstCard = this;
    hasFlipped = true;
  } else {
    secondCard = this;
    hasFlipped = false;

    if (firstCard.dataset.number === secondCard.dataset.number) {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
    } else {
      setTimeout(() => {
        firstCard.textContent = '';
        secondCard.textContent = '';
      }, 1000);
    }
  }
}
