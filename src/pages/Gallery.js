import { storageService } from '../services/storage.js';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';
import photo7 from '../assets/photo7.jpg';
import photo8 from '../assets/photo8.jpg';
import photo9 from '../assets/photo9.jpg';
import photo10 from '../assets/photo10.jpg';
import photo11 from '../assets/photo11.jpg';
import photo12 from '../assets/photo12.jpg';
import photo13 from '../assets/photo13.jpg';
import photo14 from '../assets/photo14.jpg';
import photo15 from '../assets/photo15.jpg';
import photo16 from '../assets/photo16.jpg';
import photo17 from '../assets/photo17.jpg';
import photo18 from '../assets/photo18.jpg';
import photo19 from '../assets/photo19.jpg';

export default function Gallery() {
    const container = document.createElement('div');
    container.className = 'p-4 max-w-6xl mx-auto pb-24';

    const header = document.createElement('div');
    header.className = 'text-center mb-8 animate-fade-in-down';
    header.innerHTML = `
        <h1 class="text-4xl md:text-5xl text-mateo-blue mb-2 drop-shadow-sm font-fredoka">Galería de Recuerdos</h1>
        <p class="text-gray-600 font-semibold text-lg">Momentos inolvidables de Mateo</p>
    `;
    container.appendChild(header);

    // Mock Data (In a real app, this could also come from storage or a config file)
    const memories = [
        { id: 1, src: photo1, desc: 'Primer día en el parque', story: 'Mateo descubrió que el césped hace cosquillas.' },
        { id: 2, src: photo2, desc: 'Jugando con el abuelo', story: 'El abuelo hace las mejores caras graciosas.' },
        { id: 3, src: photo3, desc: 'Descubriendo los colores', story: 'El rojo es su color favorito, ¡como las fresas!' },
        { id: 4, src: photo4, desc: 'Risas en el baño', story: '¡Más burbujas, por favor!' },
        { id: 5, src: photo5, desc: 'Su primer helado', story: 'Estaba frío, pero delicioso.' },
        { id: 6, src: photo6, desc: 'Gateando por toda la casa', story: 'Nadie puede atrapar al veloz Mateo.' },
        { id: 7, src: photo7, desc: 'Con su juguete favorito', story: 'El osito Sr. Abrazos va a todas partes.' },
        { id: 8, src: photo8, desc: 'Durmiendo como un angelito', story: 'Soñando con nuevas aventuras.' },
        { id: 9, src: photo9, desc: 'Fiesta de cumpleaños', story: '¡Un año lleno de amor y alegría!' },
        { id: 10, src: photo10, desc: 'Explorando el jardín', story: 'Buscando tesoros entre las flores.' },
        { id: 11, src: photo11, desc: 'Mirando las nubes', story: 'Esa parece un elefante.' },
        { id: 12, src: photo12, desc: 'Jugando con bloques', story: '¡La torre más alta del mundo!' },
        { id: 13, src: photo13, desc: 'Paseo en cochecito', story: 'Saludando a todos los perritos.' },
        { id: 14, src: photo14, desc: 'Aprendiendo a caminar', story: 'Un paso, dos pasos... ¡y al suelo!' },
        { id: 15, src: photo15, desc: 'En la playa', story: 'La arena es muy divertida.' },
        { id: 16, src: photo16, desc: 'Con mamá', story: 'Los abrazos de mamá son los mejores.' },
        { id: 17, src: photo17, desc: 'Con papá', story: 'Papá es muy fuerte y divertido.' },
        { id: 18, src: photo18, desc: 'Leyendo un cuento', story: 'Había una vez...' },
        { id: 19, src: photo19, desc: 'Sonrisa traviesa', story: '¿Qué estará planeando?' },
    ];

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6';

    memories.forEach((memory, index) => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in-up';
        card.style.animationDelay = `${index * 100}ms`;

        card.innerHTML = `
            <div class="relative aspect-square overflow-hidden cursor-pointer group">
                <img src="${memory.url}" alt="${memory.desc}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span class="text-white text-4xl">🔍</span>
                </div>
            </div>
            <div class="p-4">
                <p class="font-bold text-gray-700 mb-2">${memory.desc}</p>
                <div class="flex justify-between items-center text-sm text-gray-500">
                    <span>${memory.date}</span>
                    <button class="flex items-center space-x-1 text-mateo-red hover:bg-red-50 px-2 py-1 rounded-full transition">
                        <span>❤️</span>
                        <span>${memory.likes}</span>
                    </button>
                </div>
            </div>
        `;

        // Lightbox logic
        const imgContainer = card.querySelector('.relative');
        imgContainer.onclick = () => openLightbox(memory);

        grid.appendChild(card);
    });

    container.appendChild(grid);

    // Lightbox Container (Hidden by default)
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'fixed inset-0 bg-black/90 z-[60] hidden flex items-center justify-center p-4';
    lightbox.onclick = (e) => {
        if (e.target === lightbox) closeLightbox();
    };
    container.appendChild(lightbox);

    function openLightbox(memory) {
        lightbox.innerHTML = `
            <div class="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-in m-4">
                <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl z-10 bg-white/50 rounded-full w-10 h-10 flex items-center justify-center" onclick="document.getElementById('lightbox').classList.add('hidden')">×</button>
                <div class="flex flex-col md:flex-row h-full max-h-[80vh]">
                    <div class="w-full md:w-1/2 bg-black/5 flex items-center justify-center">
                        <img src="${memory.url}" class="w-full h-full object-contain max-h-[50vh] md:max-h-full">
                    </div>
                    <div class="w-full md:w-1/2 p-6 overflow-y-auto flex flex-col">
                        <h3 class="text-3xl font-bold text-mateo-blue mb-4">${memory.desc}</h3>
                        <div class="prose prose-lg text-gray-600 mb-6 flex-grow italic">
                            "${memory.story || 'Un momento mágico para recordar siempre.'}"
                        </div>
                        <div class="mt-auto">
                            <div class="flex items-center justify-between text-sm text-gray-400 mb-4">
                                <span>${memory.date}</span>
                                <span class="flex items-center text-mateo-red font-bold">❤️ ${memory.likes}</span>
                            </div>
                            <div class="grid grid-cols-3 gap-2">
                                <button class="btn-primary bg-mateo-red hover:bg-red-400 text-sm py-2">❤️ Amar</button>
                                <button class="btn-primary bg-mateo-blue hover:bg-blue-400 text-sm py-2">💬 Comentar</button>
                                <button class="btn-primary bg-mateo-green hover:bg-green-400 text-sm py-2">🔗 Compartir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        lightbox.classList.remove('hidden');
    }

    function closeLightbox() {
        lightbox.classList.add('hidden');
    }

    return container;
}

