export default function ColorExplosion(container, onExit) {
    container.innerHTML = '';
    const canvas = document.createElement('canvas');
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight || 500;
    canvas.className = 'w-full h-full bg-white cursor-pointer touch-none';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const shapes = [];

    // Exit button
    const exitBtn = document.createElement('button');
    exitBtn.textContent = '❌ Salir';
    exitBtn.className = 'absolute top-4 right-4 bg-white/80 text-red-500 font-bold py-2 px-4 rounded-full shadow-lg z-10';
    exitBtn.onclick = onExit;
    container.appendChild(exitBtn);

    // Instruction
    const instruction = document.createElement('div');
    instruction.textContent = '¡Toca la pantalla!';
    instruction.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-300 pointer-events-none animate-pulse select-none';
    container.appendChild(instruction);

    function randomColor() {
        const colors = ['#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE', '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE', '#B2FF59', '#EEFF41', '#FFFF00', '#FFD740', '#FFAB40', '#FF6E40'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function createExplosion(x, y) {
        instruction.style.display = 'none';
        const color = randomColor();
        const shapeType = Math.random() > 0.5 ? 'circle' : 'rect';
        const size = Math.random() * 50 + 50;

        shapes.push({ x, y, color, size, type: shapeType, alpha: 1, scale: 0 });
        playSound();
    }

    function playSound() {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(200 + Math.random() * 500, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);

        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.5);
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = shapes.length - 1; i >= 0; i--) {
            const s = shapes[i];
            s.scale += 0.1;
            s.alpha -= 0.02;

            ctx.globalAlpha = s.alpha;
            ctx.fillStyle = s.color;
            ctx.beginPath();

            if (s.type === 'circle') {
                ctx.arc(s.x, s.y, s.size * s.scale, 0, Math.PI * 2);
                ctx.fill();
            } else {
                const dim = s.size * s.scale;
                ctx.fillRect(s.x - dim / 2, s.y - dim / 2, dim, dim);
            }

            if (s.alpha <= 0) {
                shapes.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();

    const handleInput = (e) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
        const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
        createExplosion(x, y);
    };

    canvas.addEventListener('mousedown', handleInput);
    canvas.addEventListener('touchstart', handleInput);
}
