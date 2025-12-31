// Auto-play music when page loads
window.addEventListener('load', function() {
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');
    let isPlaying = false;
    
    // Set volume
    music.volume = 0.5;
    
    // Try to auto-play after first click anywhere on page
    document.body.addEventListener('click', function playOnClick() {
        if (!isPlaying) {
            music.play().then(() => {
                isPlaying = true;
                musicBtn.textContent = '🔊';
            }).catch(err => {
                console.log('Playback error:', err);
            });
            document.body.removeEventListener('click', playOnClick);
        }
    }, { once: true });
    
    // Toggle music on button click
    musicBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (isPlaying) {
            music.pause();
            musicBtn.textContent = '🔇';
            isPlaying = false;
        } else {
            music.play().then(() => {
                musicBtn.textContent = '🔊';
                isPlaying = true;
            }).catch(err => {
                alert('Could not play music. Check if the file exists.');
                console.log('Error:', err);
            });
        }
    });
});

// Optional: Add floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px';
    heart.style.fontSize = '2em';
    heart.style.opacity = '0.7';
    heart.style.pointerEvents = 'none';
    heart.style.transition = 'all 4s ease-in-out';
    heart.style.zIndex = '1000';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.bottom = '100vh';
        heart.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Create a floating heart every 2 seconds
setInterval(createFloatingHeart, 2000);