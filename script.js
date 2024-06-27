const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
var backBtn = document.querySelector('.back-button');

backBtn.addEventListener('click', function() {
    window.location.href = "13buttons.html";
});

let currentIndex = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    const cardInner = card.querySelector('.card-inner');
    cardInner.classList.remove('flipped');
    if (i === index) {
      card.classList.add('active');
      card.classList.remove('exit-left', 'exit-right');
    } else if (i < index) {
      card.classList.remove('active');
      card.classList.add('exit-left');
    } else {
      card.classList.remove('active');
      card.classList.add('exit-right');
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  showCard(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, cards.length - 1);
  showCard(currentIndex);
});

// Show the first card initially
showCard(currentIndex);

cards.forEach(card => {
  card.addEventListener('click', () => {
    const cardInner = card.querySelector('.card-inner');
    cardInner.classList.toggle('flipped');
  });
});
