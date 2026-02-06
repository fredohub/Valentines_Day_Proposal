// Function for the "No" button
function moveButton() {
    const noBtn = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Function for the "Yes" button: confetti + sounds + redirect
const yesButton = document.getElementById('yesButton');
if (yesButton) {
    yesButton.addEventListener('click', () => {
        const pop = document.getElementById('popSound');
        const sparkle = document.getElementById('sparkleSound');

        // Play pop sound immediately
        if (pop) { pop.volume = 0.7; pop.play().catch(() => {}); }

        // Sparkle sound 400ms later
        setTimeout(() => {
            if (sparkle) { sparkle.volume = 0.5; sparkle.play().catch(() => {}); }
        }, 400);

        // Confetti animation (3 seconds)
        const duration = 3000;
        const end = Date.now() + duration;
        const myConfetti = confetti.create(null, { resize: true });

        (function frame() {
            myConfetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#FFC0CB','#FF69B4','#FF1493','#FAF9F6']
            });

            myConfetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#FFC0CB','#FF69B4','#FF1493','#FAF9F6']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();

        // Redirect after 3 seconds (after confetti)
        setTimeout(() => {
            window.location.href = "yes.html";
        }, duration);
    });
}