import ColorExplosion from '../games/ColorExplosion.js';
import Memory from '../games/Memory.js';

export default function Games() {
    const container = document.createElement('div');
    container.className = 'p-4 max-w-4xl mx-auto pb-24 h-[calc(100vh-6rem)]'; // Full height minus nav

    const menu = document.createElement('div');
    menu.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 h-full content-center';

    const games = [
        { title: 'Explosión de Color', icon: '🎨', color: 'bg-mateo-red', action: () => loadGame(ColorExplosion) },
        { title: 'Parejas', icon: '🧩', color: 'bg-mateo-blue', action: () => loadGame(Memory) },
        { title: 'Piano Musical', icon: '🎹', color: 'bg-mateo-yellow', action: () => alert('Próximamente') },
        { title: 'Bloques', icon: '🧱', color: 'bg-mateo-green', action: () => alert('Próximamente') },
    ];

    games.forEach(game => {
        const card = document.createElement('div');
        card.className = `${game.color} text-white rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition-all`;
        card.innerHTML = `
            <div class="text-6xl mb-4">${game.icon}</div>
            <h3 class="text-2xl font-bold text-center">${game.title}</h3>
        `;
        card.onclick = game.action;
        menu.appendChild(card);
    });

    container.appendChild(menu);

    function loadGame(gameFunction) {
        // Clear container but keep it as the game stage
        const gameStage = document.createElement('div');
        gameStage.className = 'fixed inset-0 bg-gray-50 z-50 flex flex-col';
        document.body.appendChild(gameStage);

        gameFunction(gameStage, () => {
            document.body.removeChild(gameStage);
        });
    }

    return container;
}

