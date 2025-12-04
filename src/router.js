import Home from './pages/Home.js';
import Gallery from './pages/Gallery.js';
import Stories from './pages/Stories.js';
import Games from './pages/Games.js';
import Lounge from './pages/Lounge.js';

// Base path for GitHub Pages
const BASE_PATH = import.meta.env.BASE_URL || '/';

const routes = {
    '/': Home,
    '/gallery': Gallery,
    '/stories': Stories,
    '/games': Games,
    '/lounge': Lounge
};

// Normalize path by removing base path
function normalizePath(fullPath) {
    if (BASE_PATH === '/') return fullPath;
    return fullPath.replace(BASE_PATH, '/').replace('//', '/') || '/';
}

export function navigate(path) {
    const fullPath = BASE_PATH === '/' ? path : BASE_PATH + path.replace('/', '');
    window.history.pushState({}, path, fullPath);
    render(path);
}

export function render(path) {
    const app = document.getElementById('app-content');
    const normalizedPath = normalizePath(path);
    const Page = routes[normalizedPath] || Home;
    app.innerHTML = '';
    app.appendChild(Page());

    // Update active state in navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('href') === normalizedPath) {
            link.classList.add('active-nav');
        }
    });
}

window.onpopstate = () => {
    render(window.location.pathname);
};

// Initial render with normalized path
const initialPath = normalizePath(window.location.pathname);
if (initialPath !== '/') {
    render(initialPath);
}
