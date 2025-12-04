import { storiesData } from '../data/storiesData.js';
import { storageService } from '../services/storage.js';

export default function Stories() {
    const container = document.createElement('div');
    container.className = 'min-h-screen p-6 md:p-10 pt-28';
    container.style.cssText = `
        background: linear-gradient(135deg, #FFF5E6 0%, #E8F5E9 50%, #E3F2FD 100%);
    `;

    const content = document.createElement('div');
    content.className = 'max-w-6xl mx-auto';

    const header = document.createElement('div');
    header.className = 'text-center mb-10 md:mb-14';
    header.innerHTML = `
        <h1 class="text-5xl md:text-6xl font-fredoka font-black mb-4" style="background: linear-gradient(135deg, #A78BFA 0%, #FF6B9D 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">📚 Cuentos Mágicos</h1>
        <p class="text-xl md:text-2xl font-poppins font-semibold text-gray-700">Historias para soñar y aprender ✨</p>
    `;
    content.appendChild(header);

    const storiesList = document.createElement('div');
    storiesList.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8';
    content.appendChild(storiesList);

    container.appendChild(content);

    // Use the imported data
    const stories = storiesData;

    // Detail View Container (Hidden initially)
    const detailContainer = document.createElement('div');
    detailContainer.className = 'hidden';
    container.appendChild(detailContainer);

    const colors = [
        'linear-gradient(135deg, #FF6B9D 0%, #FFB6B9 100%)',
        'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 100%)',
        'linear-gradient(135deg, #4D96FF 0%, #95E1D3 100%)',
        'linear-gradient(135deg, #FFD93D 0%, #FFA94D 100%)',
        'linear-gradient(135deg, #6BCB77 0%, #95E1D3 100%)',
    ];

    // Helper to render the list
    const renderList = () => {
        storiesList.innerHTML = '';

        stories.forEach((story, index) => {
            const card = document.createElement('div');
            card.className = 'group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2';
            card.style.cssText = `
                background: ${colors[index % colors.length]};
                border-radius: 2rem;
                box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                overflow: hidden;
            `;
            card.innerHTML = `
                <div class="relative h-56 md:h-64 overflow-hidden">
                    <img src="${story.image}" alt="${story.title}" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/20"></div>
                </div>
                <div class="p-6 md:p-8">
                    <h3 class="text-2xl md:text-3xl font-fredoka font-black text-white mb-3 leading-tight" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">${story.title}</h3>
                    <p class="text-base md:text-lg font-poppins font-semibold text-white/90 mb-6 line-clamp-2">${story.desc}</p>
                    <button class="w-full bg-white text-gray-800 font-poppins font-bold text-lg md:text-xl py-4 px-6 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        📖 Leer Cuento
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
                    <div class="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                        <button id="tts-btn" class="w-full md:w-auto btn-modern btn-success px-8 py-4 text-base md:text-lg">
                            🔊 Escuchar Cuento
                        </button>
                        <button id="like-btn" class="w-full md:w-auto btn-modern btn-danger px-8 py-4 text-base md:text-lg">
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
                        <div class="flex flex-col md:flex-row gap-3">
                            <input type="text" id="comment-input" placeholder="Escribe un comentario..." class="flex-1 p-4 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-mateo-blue focus:border-transparent text-base">
                            <button id="send-comment" class="btn-modern px-8 py-4 md:py-0 text-base">
                                ➤ Enviar
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
