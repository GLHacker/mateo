import mateoAvatar from '../assets/mateo_avatar.png';
import { navigate } from '../router.js';

export default function Home() {
    const container = document.createElement('div');
    container.className = 'min-h-screen w-full p-6 md:p-10';
    container.style.cssText = `
        background: linear-gradient(135deg, #FFF5E6 0%, #E8F5E9 50%, #E3F2FD 100%);
    `;

    // Content wrapper
    const content = document.createElement('div');
    content.className = 'max-w-6xl mx-auto';

    // Header Section
    const header = document.createElement('div');
    header.className = 'text-center mb-12 md:mb-16';

    // Title with Canva style
    const title = document.createElement('h1');
    title.className = 'font-fredoka font-black mb-6';
    title.style.cssText = `
        font-size: clamp(3rem, 10vw, 6rem);
        line-height: 1.1;
        background: linear-gradient(135deg, #FF6B9D 0%, #FFD93D 50%, #6BCB77 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 3px 3px 0px rgba(0,0,0,0.1);
    `;
    title.innerHTML = 'MATEO<br>LUIS<br>JENNIFER';

    // Subtitle
    const subtitle = document.createElement('p');
    subtitle.className = 'text-2xl md:text-3xl font-poppins font-bold text-gray-700 mt-4';
    subtitle.textContent = '¡Bienvenidos a nuestro mundo mágico! ✨';

    header.appendChild(title);
    header.appendChild(subtitle);
    content.appendChild(header);

    // Cards Grid
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8';

    const cards = [
        {
            title: 'Galería',
            icon: '📸',
            path: '/gallery',
            bg: 'linear-gradient(135deg, #FF6B9D 0%, #FFB6B9 100%)',
            desc: 'Nuestras fotos'
        },
        {
            title: 'Cuentos',
            icon: '📚',
            path: '/stories',
            bg: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 100%)',
            desc: 'Historias mágicas'
        },
        {
            title: 'Juegos',
            icon: '🎮',
            path: '/games',
            bg: 'linear-gradient(135deg, #4D96FF 0%, #95E1D3 100%)',
            desc: 'Diversión sin fin'
        }
    ];

    cards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2';
        cardEl.style.cssText = `
            background: ${card.bg};
            border-radius: 2rem;
            padding: 2.5rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            min-height: 280px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        `;

        cardEl.innerHTML = `
            <div class="text-8xl md:text-9xl mb-4 group-hover:scale-110 transition-transform duration-300">${card.icon}</div>
            <h2 class="text-3xl md:text-4xl font-fredoka font-black text-white mb-2" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">${card.title}</h2>
            <p class="text-lg md:text-xl font-poppins font-semibold text-white opacity-90">${card.desc}</p>
        `;

        cardEl.onclick = () => navigate(card.path);
        grid.appendChild(cardEl);
    });

    content.appendChild(grid);
    container.appendChild(content);

    return container;
}
