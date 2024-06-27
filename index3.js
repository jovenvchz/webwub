document.addEventListener('DOMContentLoaded', function() {
  const dialogBoxes = document.querySelectorAll('.dialog-box');
  const backButton = document.querySelector('#back-button');
  const dialogSection = document.querySelector('.dialog');
  const yamato = document.querySelector('.yamato');
  const robin = document.querySelector('.robin');
  const hancock = document.querySelector('.hancock');
  const gastino = document.querySelector('.gastino');
  let currentDialogIndex = 0;


  function showCurrentDialog() {
    dialogBoxes.forEach((dialogBox, index) => {
      if (index === currentDialogIndex) {
        dialogBox.classList.remove('hidden');
      } else {
        dialogBox.classList.add('hidden');
      }
    });

    // Show or hide back button based on current dialog index
    backButton.style.display = currentDialogIndex > 0 ? 'block' : 'none';

    // Check if it's the last dialog box
    if (currentDialogIndex === dialogBoxes.length - 1) {
      // Hide dialog section and image after a delay
      setTimeout(() => {
        dialogSection.classList.add('fade-out');
        yamato.classList.add('fade-out');
        setTimeout(() => {
          dialogSection.classList.add('hidden');
          yamato.classList.add('hidden');
          window.location.href = "thirdpage.html";
          // Now you can display something else or take any other action
        }, 100); // Adjust the delay as needed (1 second in this example)
      }, 100); // Adjust the delay as needed (2 seconds in this example)
    }

  }
  

  // Show initial dialog
  showCurrentDialog();

  // Event listener for clicking on dialog boxes
  dialogBoxes.forEach(dialogBox => {
    dialogBox.addEventListener('click', function() {
      if (currentDialogIndex === dialogBoxes.length - 1) {
        // If it's the last dialog box, increment index only after clicking it
        showCurrentDialog();
      } else {
        currentDialogIndex++;
        showCurrentDialog();
      }
    });
  });

  // Event listener for clicking on back button
  backButton.addEventListener('click', function() {
    currentDialogIndex--;
    showCurrentDialog();
  });
});
