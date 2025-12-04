import { storiesData } from '../data/storiesData.js';
import { storageService } from '../services/storage.js';

export default function Stories() {
    const container = document.createElement('div');
    container.className = 'p-4 max-w-4xl mx-auto pb-24';

    const header = document.createElement('div');
    header.className = 'text-center mb-8 animate-fade-in-down';
    header.innerHTML = `
        <h1 class="text-4xl md:text-5xl text-mateo-yellow mb-2 drop-shadow-sm font-fredoka">Cuentos Mágicos</h1>
        <p class="text-gray-600 font-semibold text-lg">Historias para soñar y aprender</p>
    `;
    container.appendChild(header);

    const storiesList = document.createElement('div');
    storiesList.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';
    container.appendChild(storiesList);

    // Use the imported data
    const stories = storiesData;

    // Detail View Container (Hidden initially)
    const detailContainer = document.createElement('div');
    detailContainer.className = 'hidden bg-white rounded-3xl shadow-xl p-6 animate-fade-in-up';
    container.appendChild(detailContainer);

    // Helper to render the list
    const renderList = () => {
        storiesList.innerHTML = '';
        stories.forEach(story => {
            const card = document.createElement('div');
            card.className = 'card-3d glass rounded-2xl overflow-hidden cursor-pointer group relative';
            card.innerHTML = `
                <div class="relative h-64 overflow-hidden">
                    <img src="${story.image}" alt="${story.title}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition duration-500"></div>
                    <div class="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition duration-500">
                        <h3 class="text-white text-2xl font-bold drop-shadow-lg mb-2 leading-tight">${story.title}</h3>
                        <div class="h-1 w-12 bg-mateo-yellow rounded-full group-hover:w-full transition-all duration-500"></div>
                    </div>
                </div>
                <div class="p-6">
                    <p class="text-gray-200 line-clamp-3 mb-6 font-medium">${story.desc}</p>
                    <button class="w-full btn-3d bg-white text-mateo-blue font-bold py-3 px-4 rounded-xl hover:text-blue-700 transition flex items-center justify-center gap-2 transform group-hover:scale-105">
                        <span class="text-2xl">📖</span> Leer Cuento
                    </button>
                </div>
            `;
            card.onclick = () => openStory(story);
            storiesList.appendChild(card);
        });
    };

    renderList(); // Initial render

    const openStory = (story) => {
        container.innerHTML = '';
        window.scrollTo(0, 0);

        const detailView = document.createElement('div');
        detailView.className = 'animate-fade-in-up';

        // Setup TTS
        let isSpeaking = false;
        const speech = new SpeechSynthesisUtterance();
        speech.lang = 'es-ES';
        speech.text = story.content;
        speech.rate = 0.9;
        speech.pitch = 1.1;

        speech.onend = () => {
            isSpeaking = false;
            updateTTSButton();
        };

        const toggleTTS = () => {
            if (isSpeaking) {
                window.speechSynthesis.cancel();
                isSpeaking = false;
            } else {
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(speech);
                isSpeaking = true;
            }
            updateTTSButton();
        };

        const updateTTSButton = () => {
            const btn = detailView.querySelector('#tts-btn');
            if (btn) {
                btn.innerHTML = isSpeaking ? '🔇 Detener Audio' : '🔊 Escuchar Cuento';
                btn.className = isSpeaking
                    ? 'bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 transition shadow-lg animate-pulse'
                    : 'bg-mateo-green text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition shadow-lg';
            }
        };

        // LocalStorage Interactions
        const storyId = `story_${story.id}`;
        let { likes, comments } = storageService.getStoryInteractions(storyId);

        const handleLike = () => {
            likes = storageService.likeStory(storyId);
            updateInteractionsUI();
        };

        const handleComment = (text) => {
            if (!text.trim()) return;
            // Mock user for now since we removed Auth
            const user = 'Visitante';
            comments = storageService.commentStory(storyId, user, text);
            updateInteractionsUI();
        };

        const updateInteractionsUI = () => {
            const likeBtn = detailView.querySelector('#like-btn');
            const commentsList = detailView.querySelector('#comments-list');

            if (likeBtn) likeBtn.innerHTML = `❤️ ${likes}`;

            if (commentsList) {
                commentsList.innerHTML = comments.map(c => `
                    <div class="bg-gray-50 p-3 rounded-lg mb-2 text-left">
                        <span class="font-bold text-mateo-blue text-sm">${c.user}</span>
                        <p class="text-gray-700 text-sm">${c.text}</p>
                    </div>
                `).join('');
            }
        };

        detailView.innerHTML = `
            <button id="back-btn" class="mb-4 text-mateo-blue font-bold hover:underline flex items-center gap-2">
                ⬅ Volver a los cuentos
            </button>
            
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div class="relative h-64 md:h-96">
                    <img src="${story.image}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <h1 class="absolute bottom-6 left-6 text-3xl md:text-5xl text-white font-bold drop-shadow-lg">${story.title}</h1>
                </div>
                
                <div class="p-6 md:p-10">
                    <div class="flex justify-between items-center mb-8">
                        <button id="tts-btn" class="bg-mateo-green text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition shadow-lg">
                            🔊 Escuchar Cuento
                        </button>
                        <button id="like-btn" class="bg-pink-100 text-pink-500 font-bold py-2 px-6 rounded-full hover:bg-pink-200 transition shadow-md">
                            ❤️ ${likes}
                        </button>
                    </div>

                    <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed font-nunito">
                        ${story.content.split('\n').filter(line => line.trim() !== '').map(p => `<p class="mb-4">${p}</p>`).join('')}
                    </div>

                    <hr class="my-8 border-gray-200">

                    <div class="bg-blue-50 p-6 rounded-2xl">
                        <h3 class="text-xl font-bold text-mateo-blue mb-4">Comentarios</h3>
                        <div id="comments-list" class="max-h-60 overflow-y-auto mb-4 custom-scrollbar">
                            <!-- Comments loaded here -->
                        </div>
                        <div class="flex gap-2">
                            <input type="text" id="comment-input" placeholder="Escribe un comentario..." class="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mateo-blue">
                            <button id="send-comment" class="bg-mateo-blue text-white p-3 rounded-xl hover:bg-blue-600 transition">
                                ➤
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        detailView.querySelector('#back-btn').onclick = () => {
            window.speechSynthesis.cancel();
            container.innerHTML = '';
            container.appendChild(header);
            container.appendChild(storiesList);
            renderList();
        };

        detailView.querySelector('#tts-btn').onclick = toggleTTS;
        detailView.querySelector('#like-btn').onclick = handleLike;

        const commentInput = detailView.querySelector('#comment-input');
        const sendBtn = detailView.querySelector('#send-comment');

        const submitComment = () => {
            handleComment(commentInput.value);
            commentInput.value = '';
        };

        sendBtn.onclick = submitComment;
        commentInput.onkeypress = (e) => {
            if (e.key === 'Enter') submitComment();
        };

        container.appendChild(detailView);
        updateInteractionsUI();
    };

    return container;
}
