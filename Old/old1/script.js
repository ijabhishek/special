document.addEventListener('DOMContentLoaded', () => {
    const showMorningButton = document.getElementById('showMorningButton');
    const morningPopup = document.getElementById('morningPopup');
    const morningAudio = document.getElementById('morningAudio');
    const closeButton = document.getElementById('closeButton');
    const goHomeButton = document.getElementById('goHomeButton');

    function showMorningPopup() {
        morningPopup.style.display = 'block';
        morningAudio.play();
    }

    function closeMorningPopup() {
        morningPopup.style.display = 'none';
        morningAudio.pause();
        morningAudio.currentTime = 0;
    }

    showMorningButton.addEventListener('click', () => {
        showMorningPopup();
    });

    closeButton.addEventListener('click', () => {
        closeMorningPopup();
    });
    goHomeButton.addEventListener('click', () => {
        morningAudio.pause();
        morningAudio.currentTime = 0;
        closeMorningPopup();
    });
});
