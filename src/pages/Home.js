import mateoAvatar from '../assets/mateo_avatar.png';
import { navigate } from '../router.js';

export default function Home() {
    const container = document.createElement('div');
    container.className = 'flex flex-col items-center justify-center min-h-[80vh] w-full p-4 space-y-12';

    // 3D Animated Text
    const title = document.createElement('h1');
    title.className = 'text-3d text-5xl md:text-7xl leading-tight';
    title.innerHTML = 'MATEO<br>LUIS<br>JENNIFER';
    container.appendChild(title);

    // Navigation Buttons Container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'flex flex-wrap justify-center gap-6 mt-8';

    const buttons = [
        { text: 'Galería', path: '/gallery', icon: '📸' },
        { text: 'Cuentos', path: '/stories', icon: '📚' },
        { text: 'Fotos Familia', path: '/gallery', icon: '👨‍👩‍👦' }
    ];

    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.className = 'nav-btn flex items-center gap-2';
        button.innerHTML = `<span>${btn.icon}</span> ${btn.text}`;
        button.onclick = () => navigate(btn.path);
        buttonsContainer.appendChild(button);
    });

    container.appendChild(buttonsContainer);

    return container;
}

