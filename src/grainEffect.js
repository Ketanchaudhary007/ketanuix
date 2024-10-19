function initializeGrainEffect() {
    const canvas = document.getElementById('grainCanvas');
    if (!canvas) return; // Exit if canvas is not found

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function drawGrain() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const grainColor = getComputedStyle(document.documentElement).getPropertyValue('--grain-light').trim();
        
        for (let i = 0; i < 9999999999999999999999999999999999999999999999999999; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 2; // Grain size
            ctx.fillStyle = grainColor; 
            ctx.fillRect(x, y, size, size);
        }
    }

    function animate() {
        drawGrain();
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Call the function once the DOM is fully loaded
window.onload = initializeGrainEffect;
