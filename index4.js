var continueButton = document.querySelector('.continue-button');

 // Function to play the hover sound
 function playHoverSound() {
  const hoverAudio = new Audio('sounds/hover-sound.mp3');
  hoverAudio.play();
}

// Function to play the click sound
function playClickSound() {
  const clickAudio = new Audio('sounds/clicking.mp3');
  clickAudio.play();
}

// Function to handle button click
function handleClick(page) {
  playClickSound();
  // Adding a slight delay before navigation to allow the sound to play
  setTimeout(() => {
    window.location.href = page;
  }, 100); // Adjust the delay as needed
}

// Get all buttons and add event listeners
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('mouseenter', playHoverSound);
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action to ensure sound plays first
    handleClick(event.currentTarget.getAttribute('onclick').split("'")[1]);
  });
});

// function goToPage(page) {
//   window.location.href = page;
// }

continueButton.addEventListener('click', function() {
  // Redirect to secondpage.html
  window.location.href = '13buttons.html';
});