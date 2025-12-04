import mateoAvatar from '../assets/mateo_avatar.png';
import { navigate } from '../router.js';

export default function Home() {
    const container = document.createElement('div');
    container.className = 'flex flex-col items-center justify-center min-h-screen w-full p-6 md:p-8';

    // Hero Section
    const heroSection = document.createElement('div');
    heroSection.className = 'text-center mb-12 md:mb-16 fade-in-up';

    // Beautiful Title
    const title = document.createElement('h1');
    title.className = 'text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight';
    title.style.cssText = `
        color: white;
        text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.8),
            0 0 20px rgba(255, 255, 255, 0.6),
            0 0 30px rgba(255, 255, 255, 0.4),
            3px 3px 6px rgba(0, 0, 0, 0.8),
            6px 6px 12px rgba(0, 0, 0, 0.6);
        font-family: 'Fredoka', 'Comic Sans MS', cursive;
        letter-spacing: 2px;
    `;
    title.innerHTML = 'MATEO<br>LUIS<br>JENNIFER';

    const subtitle = document.createElement('p');
    subtitle.className = 'text-xl md:text-2xl text-white font-semibold mt-6 stagger-2 fade-in-up';
    subtitle.style.cssText = `
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    `;
    subtitle.textContent = '¡Bienvenidos a nuestro mundo!';

    heroSection.appendChild(title);
    heroSection.appendChild(subtitle);
    container.appendChild(heroSection);

    // Navigation Buttons Container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4 stagger-3 fade-in-up';

    const buttons = [
        { text: 'Galería de Fotos', path: '/gallery', icon: '📸', color: 'from-pink-500 to-rose-600' },
        { text: 'Cuentos Mágicos', path: '/stories', icon: '📚', color: 'from-purple-500 to-indigo-600' },
        { text: 'Juegos Divertidos', path: '/games', icon: '🎮', color: 'from-blue-500 to-cyan-600' }
    ];

    buttons.forEach((btn, index) => {
        const button = document.createElement('button');
        button.className = `group relative overflow-hidden rounded-3xl p-8 md:p-10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 stagger-${index + 4} fade-in-up`;
        button.style.cssText = `
            background: linear-gradient(135deg, ${btn.color.split(' ')[0].replace('from-', '')} 0%, ${btn.color.split(' ')[2].replace('to-', '')} 100%);
            box-shadow: 
                0 10px 30px rgba(0, 0, 0, 0.5),
                0 1px 8px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
            min-height: 140px;
        `;

        button.innerHTML = `
            <div class="relative z-10 flex flex-col items-center justify-center gap-3">
                <span class="text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-300">${btn.icon}</span>
                <span class="text-xl md:text-2xl font-bold text-white tracking-wide">${btn.text}</span>
            </div>
            <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        `;

        button.onclick = () => navigate(btn.path);
        buttonsContainer.appendChild(button);
    });

    container.appendChild(buttonsContainer);

    return container;
}
