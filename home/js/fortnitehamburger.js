document.addEventListener('DOMContentLoaded', function() {
    const tetrisItem = document.getElementById('tetris-item');
    const tetrisVideo = document.getElementById('tetris-video');

    tetrisItem.addEventListener('mouseover', function() {
        tetrisVideo.style.display = 'block';
        tetrisVideo.play(); // Ensure video plays on hover
    });

    tetrisItem.addEventListener('mouseout', function() {
        tetrisVideo.style.display = 'none';
        tetrisVideo.pause(); // Pause video when not hovering
        tetrisVideo.currentTime = 0; // Reset video to beginning
    });
});