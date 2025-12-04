import mateoAvatar from '../assets/mateo_avatar.png';
import toyIcon from '../assets/toy_icon.png';
import bookIcon from '../assets/book_icon.png';
import cameraIcon from '../assets/camera_icon.png';

export default function Memory(container, onExit) {
    container.innerHTML = '';
    container.className = 'flex flex-col items-center justify-center h-full p-4';

    // Header
    const header = document.createElement('div');
    header.className = 'w-full flex justify-between items-center mb-4';

    const title = document.createElement('h2');
    title.textContent = 'Parejas';
    title.className = 'text-3xl font-bold text-mateo-blue';

    const exitBtn = document.createElement('button');
    exitBtn.textContent = '❌ Salir';
    exitBtn.className = 'bg-white text-red-500 font-bold py-2 px-4 rounded-full shadow-md';
    exitBtn.onclick = onExit;

    header.appendChild(title);
    header.appendChild(exitBtn);
    container.appendChild(header);

    // Game Grid
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-2 gap-4 w-full max-w-md';
    container.appendChild(grid);

    // Game Logic
    const items = [mateoAvatar, toyIcon, bookIcon, cameraIcon];
    // Duplicate and shuffle
    const cards = [...items, ...items].sort(() => Math.random() - 0.5);

    let flippedCards = [];
    let matchedPairs = 0;

    cards.forEach((imgSrc, index) => {
        const card = document.createElement('div');
        card.className = 'aspect-square bg-white rounded-2xl shadow-lg cursor-pointer flex items-center justify-center transform transition-transform duration-300 hover:scale-105';
        card.dataset.index = index;

        const cardInner = document.createElement('div');
        cardInner.className = 'w-full h-full relative';

        // Back of card (question mark)
        const back = document.createElement('div');
        back.className = 'absolute inset-0 bg-mateo-blue rounded-2xl flex items-center justify-center text-white text-4xl font-bold';
        back.textContent = '?';

        // Front of card (image)
        const front = document.createElement('img');
        front.src = imgSrc;
        front.className = 'absolute inset-0 w-full h-full object-contain p-2 hidden';

        cardInner.appendChild(back);
        cardInner.appendChild(front);
        card.appendChild(cardInner);

        card.onclick = () => flipCard(card, front, back, imgSrc);
        grid.appendChild(card);
    });

    function flipCard(card, front, back, imgSrc) {
        if (flippedCards.length === 2 || card.classList.contains('flipped') || card.classList.contains('matched')) return;

        card.classList.add('flipped');
        back.classList.add('hidden');
        front.classList.remove('hidden');
        front.classList.add('animate-flip-in');

        flippedCards.push({ card, front, back, imgSrc });

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }

    function checkMatch() {
        const [c1, c2] = flippedCards;
        if (c1.imgSrc === c2.imgSrc) {
            // Match
            c1.card.classList.add('matched', 'border-4', 'border-green-400');
            c2.card.classList.add('matched', 'border-4', 'border-green-400');
            matchedPairs++;
            flippedCards = [];

            if (matchedPairs === items.length) {
                setTimeout(() => alert('¡Ganaste! 🎉'), 500);
            }
        } else {
            // No match
            setTimeout(() => {
                c1.card.classList.remove('flipped');
                c1.back.classList.remove('hidden');
                c1.front.classList.add('hidden');

                c2.card.classList.remove('flipped');
                c2.back.classList.remove('hidden');
                c2.front.classList.add('hidden');

                flippedCards = [];
            }, 1000);
        }
    }
}
