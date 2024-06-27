// Get the snail element
var snail = document.getElementById('snail');

// Get the audio elements
var backgroundSound = document.getElementById('backgroundSound');
var clickSound = document.getElementById('clickSound');

// Play the background sound in a loop when the page loads
window.addEventListener('load', function() {
    backgroundSound.play();
});

// Add click event listener to the snail
snail.addEventListener('click', function() {
    // Stop the background sound
    backgroundSound.pause();
    backgroundSound.currentTime = 0; // Reset the sound

    // Play the click sound
    clickSound.play();

    // Get the duration of the click sound
    var clickSoundDuration = clickSound.duration * 1000; // Convert to milliseconds

    // Redirect to another page after the click sound finishes playing
    setTimeout(function() {
        window.location.href = "secondpage.html"; // Replace with your target URL
    }, clickSoundDuration);
});
