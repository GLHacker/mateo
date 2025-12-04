import { navigate } from '../router.js';
import homeIcon from '../assets/mateo_avatar.png'; // Using avatar as home icon for now or we can use a home icon
import cameraIcon from '../assets/camera_icon.png';
import bookIcon from '../assets/book_icon.png';
import toyIcon from '../assets/toy_icon.png';
import bubbleIcon from '../assets/bubble_icon.png';

export default function Navbar() {
    const nav = document.createElement('nav');
    nav.className = 'fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:top-0 md:bottom-auto px-4 py-2 flex justify-around items-center h-20 md:h-24 rounded-t-3xl md:rounded-b-3xl md:rounded-t-none';

    const links = [
        { path: '/', icon: homeIcon, label: 'Inicio', color: 'border-mateo-blue' },
        { path: '/gallery', icon: cameraIcon, label: 'Fotos', color: 'border-mateo-yellow' },
        { path: '/stories', icon: bookIcon, label: 'Cuentos', color: 'border-mateo-purple' },
        { path: '/games', icon: toyIcon, label: 'Juegos', color: 'border-mateo-green' },
        { path: '/lounge', icon: bubbleIcon, label: 'Familia', color: 'border-mateo-red' },
    ];

    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.path;
        a.className = `nav-link flex flex-col items-center justify-center w-16 h-16 rounded-full transition-all duration-300 hover:-translate-y-2 border-4 border-transparent hover:${link.color}`;

        const img = document.createElement('img');
        img.src = link.icon;
        img.alt = link.label;
        img.className = 'w-10 h-10 object-contain';

        const span = document.createElement('span');
        span.textContent = link.label;
        span.className = 'text-xs font-bold text-gray-600 mt-1 hidden md:block';

        a.appendChild(img);
        a.appendChild(span);

        a.addEventListener('click', (e) => {
            e.preventDefault();
            navigate(link.path);
        });

        nav.appendChild(a);
    });

    return nav;
}
