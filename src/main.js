import './style.css';
import Navbar from './components/Navbar.js';
import { render } from './router.js';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen flex flex-col md:flex-row bg-blue-50">
    <div id="app-content" class="flex-1 pb-24 md:pb-0 md:pt-24 overflow-y-auto">
      <!-- Page content will be injected here -->
    </div>
  </div>
`;

const app = document.querySelector('#app');
app.appendChild(Navbar());

// Initial render is now handled by router.js
render(window.location.pathname);

