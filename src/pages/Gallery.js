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
        desc: 'Caritas Divertidas',
        story: '¡Mira todas esas caritas! Mateo es un experto en hacer gestos divertidos. A veces serio, a veces sonriente, a veces sorprendido. Cada expresión es una ventana a su personalidad única y encantadora. ¡Es imposible no sonreír al verlo!',
        date: '2025-12-03',
        likes: 55
        },
{
    type: 'image',
        url: photo15,
            desc: 'Fiesta en USA',
                story: '¡Party in the USA! Mateo luce su camiseta roja con orgullo. Está listo para celebrar y bailar al ritmo de la música. Con sus mejillas coloradas y su energía vibrante, es el alma de la fiesta donde quiera que vaya.',
                    date: '2025-07-04',
                        likes: 60
},
{
    type: 'image',
        url: photo16,
            desc: 'Descanso del Guerrero',
                story: 'Hasta los superhéroes necesitan descansar. Mateo se relaja en la cama grande, rodeado de almohadas suaves. Con una mirada pensativa, tal vez está soñando con su próxima gran hazaña o simplemente disfrutando de un momento de paz.',
                    date: '2025-12-02',
                        likes: 41
},
{
    type: 'image',
        url: photo17,
            desc: 'Escalando Cimas',
                story: 'Mateo es un aventurero nato. Aquí lo vemos en lo alto de su gimnasio de juegos, mirando hacia abajo como un rey desde su torre. No hay obstáculo demasiado alto para él. ¡El cielo es el límite para este pequeño escalador!',
                    date: '2025-11-10',
                        likes: 36
},
{
    type: 'image',
        url: photo18,
            desc: 'Elmo y Mateo',
                story: '¡Doble dosis de ternura! Mateo con su traje de Elmo es simplemente irresistible. Esa sonrisa pícara nos dice que está tramando alguna travesura divertida. Es un pequeño rayo de sol vestido de rojo.',
                    date: '2025-10-31',
                        likes: 58
},
{
    type: 'image',
        url: photo19,
            desc: 'Risas Contagiosas',
                story: '¡Jajaja! La risa de Mateo es tan pura y genuina que te hace sonreír al instante. En esta videollamada, su alegría traspasa la pantalla. Es un recordatorio de que la felicidad se encuentra en los momentos más simples y compartidos.',
                    date: '2025-12-03',
                        likes: 47
},
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

