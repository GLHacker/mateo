import { navigate } from '../router.js';
import mateoAvatar from '../assets/mateo_avatar.png';

export function navLink(href, text) {
    const isActive = window.location.pathname === href;
    const baseClass = "px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg block md:inline-block mb-2 md:mb-0";
    const activeClass = "bg-white text-mateo-blue shadow-md scale-105";
    const inactiveClass = "text-white hover:bg-white/20 hover:text-white";

    return `<a href="${href}" class="${baseClass} ${isActive ? activeClass : inactiveClass}" data-link>${text}</a>`;
}

export default function Navbar() {
    const nav = document.createElement('nav');
    nav.className = 'glass fixed w-full z-50 top-0 left-0 border-b border-white/20 shadow-lg';
    nav.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="flex items-center gap-3 group cursor-pointer" id="home-logo">
                    <div class="relative">
                        <div class="absolute -inset-1 bg-gradient-to-r from-mateo-blue to-mateo-green rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <img src="${mateoAvatar}" alt="Mateo" class="relative h-12 w-12 rounded-full border-2 border-white object-cover shadow-md transform group-hover:scale-110 transition duration-300">
                    </div>
                    <span class="text-2xl font-bold text-white drop-shadow-md font-fredoka tracking-wide group-hover:text-mateo-yellow transition">El Mundo de Mateo</span>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        ${navLink('/', '🏠 Inicio')}
                        ${navLink('/stories', '📚 Cuentos')}
                        ${navLink('/games', '🎮 Juegos')}
                        ${navLink('/gallery', '📸 Galería')}
                        ${navLink('/lounge', '🛋️ Sala de Estar')}
                        ${navLink('/guestbook', '✍️ Firmas')}
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <button type="button" class="bg-white/20 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/30 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-btn">
                        <span class="sr-only">Open main menu</span>
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="hidden md:hidden glass-dark absolute w-full top-20 left-0" id="mobile-menu">
            <div class="px-4 pt-4 pb-4 space-y-2 sm:px-3 flex flex-col">
                ${navLink('/', '🏠 Inicio')}
                ${navLink('/stories', '📚 Cuentos')}
                ${navLink('/games', '🎮 Juegos')}
                ${navLink('/gallery', '📸 Galería')}
                ${navLink('/lounge', '🛋️ Sala de Estar')}
                ${navLink('/guestbook', '✍️ Firmas')}
            </div>
        </div>
    `;

    // Event Listeners
    const logo = nav.querySelector('#home-logo');
    if (logo) {
        logo.onclick = (e) => {
            e.preventDefault();
            navigate('/');
        };
    }

    const mobileMenuBtn = nav.querySelector('#mobile-menu-btn');
    const mobileMenu = nav.querySelector('#mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.onclick = () => {
            mobileMenu.classList.toggle('hidden');
        };
    }

    const links = nav.querySelectorAll('a[data-link]');
    links.forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            navigate(href);
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        };
    });

    return nav;
}
