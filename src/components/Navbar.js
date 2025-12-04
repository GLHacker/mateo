import { navigate } from '../router.js';
import mateoAvatar from '../assets/mateo_avatar.png';

export default function Navbar() {
    const nav = document.createElement('nav');
    nav.className = 'fixed w-full z-50 top-0 left-0 shadow-lg';
    nav.style.cssText = `
        background: linear-gradient(135deg, #FF6B9D 0%, #FFD93D 50%, #6BCB77 100%);
    `;

    nav.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="flex items-center gap-3 cursor-pointer" id="home-logo">
                    <img src="${mateoAvatar}" alt="Mateo" class="h-14 w-14 rounded-full border-4 border-white object-cover shadow-lg">
                    <span class="text-2xl md:text-3xl font-fredoka font-black text-white hidden md:block" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">El Mundo de Mateo</span>
                </div>
                <div class="hidden md:flex items-center gap-4">
                    ${navLink('/', '🏠', 'Inicio')}
                    ${navLink('/stories', '📚', 'Cuentos')}
                    ${navLink('/games', '🎮', 'Juegos')}
                    ${navLink('/gallery', '📸', 'Galería')}
                </div>
                <button type="button" class="md:hidden bg-white rounded-full p-3 shadow-lg" id="mobile-menu-btn">
                    <svg class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="hidden md:hidden bg-white shadow-lg" id="mobile-menu">
            <div class="px-4 py-4 space-y-3">
                ${navLinkMobile('/', '🏠', 'Inicio')}
                ${navLinkMobile('/stories', '📚', 'Cuentos')}
                ${navLinkMobile('/games', '🎮', 'Juegos')}
                ${navLinkMobile('/gallery', '📸', 'Galería')}
            </div>
        </div>
    `;

    function navLink(href, icon, text) {
        const isActive = window.location.pathname === href;
        return `
            <a href="${href}" 
               class="flex items-center gap-2 px-5 py-3 rounded-full font-poppins font-bold text-lg transition-all duration-300 transform hover:scale-105 ${isActive ? 'bg-white text-gray-800 shadow-lg' : 'bg-white/20 text-white hover:bg-white/30'}" 
               data-link>
                <span class="text-2xl">${icon}</span>
                <span>${text}</span>
            </a>
        `;
    }

    function navLinkMobile(href, icon, text) {
        const isActive = window.location.pathname === href;
        return `
            <a href="${href}" 
               class="flex items-center gap-3 px-5 py-4 rounded-2xl font-poppins font-bold text-xl transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-canva-pink to-canva-yellow text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}" 
               data-link>
                <span class="text-3xl">${icon}</span>
                <span>${text}</span>
            </a>
        `;
    }

    // Event Listeners
    setTimeout(() => {
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
    }, 0);

    return nav;
}
