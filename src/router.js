import Home from './pages/Home.js';
import Gallery from './pages/Gallery.js';
import Stories from './pages/Stories.js';
import Games from './pages/Games.js';
import Lounge from './pages/Lounge.js';

const routes = {
    '/': Home,
    '/gallery': Gallery,
    '/stories': Stories,
    '/games': Games,
    '/lounge': Lounge
};

export function navigate(path) {
    window.history.pushState({}, path, window.location.origin + path);
    render(path);
}

export function render(path) {
    const app = document.getElementById('app-content');
    const Page = routes[path] || Home;
    app.innerHTML = '';
    app.appendChild(Page());

    // Update active state in navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('href') === path) {
            link.classList.add('active-nav');
        }
    });
}

window.onpopstate = () => {
    render(window.location.pathname);
};
