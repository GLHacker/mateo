import mateoAvatar from '../assets/mateo_avatar.png';
import { navigate } from '../router.js';

export default function Home() {
    const container = document.createElement('div');
    container.className = 'flex flex-col items-center w-full max-w-4xl mx-auto p-4 space-y-8';

    // Hero Section
    const hero = document.createElement('div');
    hero.className = 'text-center flex flex-col items-center animate-fade-in-up';
    hero.innerHTML = `
        <div class="relative w-64 h-64 mb-4">
            <div class="absolute inset-0 bg-mateo-blue opacity-20 rounded-full blur-xl animate-pulse"></div>
            <img src="${mateoAvatar}" alt="Mateo" class="relative w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500">
        </div>
        <h1 class="text-5xl md:text-6xl text-mateo-blue mb-2 drop-shadow-sm">¡Hola, soy Mateo!</h1>
        <p class="text-xl text-gray-600 font-bold bg-white/50 px-6 py-2 rounded-full shadow-sm">Bienvenido a mi aventura</p>
    `;
    container.appendChild(hero);

    // Widgets Section
    const widgetsGrid = document.createElement('div');
    widgetsGrid.className = 'grid grid-cols-1 md:grid-cols-3 gap-6 w-full';

    const widgets = [
        {
            title: 'Última Foto',
            icon: '📸',
            color: 'bg-mateo-yellow',
            text: 'Ver mis recuerdos',
            action: () => navigate('/gallery')
        },
        {
            title: 'Nuevo Cuento',
            icon: '📚',
            color: 'bg-mateo-purple',
            text: 'Leer historia',
            action: () => navigate('/stories')
        },
        {
            title: '¡A Jugar!',
            icon: '🎮',
            color: 'bg-mateo-green',
            text: 'Jugar ahora',
            action: () => navigate('/games')
        }
    ];

    widgets.forEach(widget => {
        const card = document.createElement('div');
        card.className = `${widget.color} bg-opacity-20 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 border-2 border-white/50 backdrop-blur-sm`;
        card.innerHTML = `
            <div class="text-4xl mb-2">${widget.icon}</div>
            <h3 class="text-xl font-bold text-gray-800 mb-1">${widget.title}</h3>
            <p class="text-sm text-gray-600 font-semibold">${widget.text}</p>
        `;
        card.onclick = widget.action;
        widgetsGrid.appendChild(card);
    });

    container.appendChild(widgetsGrid);

    return container;
}

