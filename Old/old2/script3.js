document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("myAudio");
    const closeButton = document.getElementById("closeButton");

    // Show the audio player and play the audio when the page loads
    audioPlayer.style.display = "block";
    audioPlayer.play();

    // Pause the audio and redirect to "thankyou.html" when the close button is clicked
    closeButton.addEventListener("click", function () {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        window.location.href = "thankyou.html";
    });
});
