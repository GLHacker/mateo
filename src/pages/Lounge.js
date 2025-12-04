import { storageService } from '../services/storage.js';

export default function Lounge() {
    const container = document.createElement('div');
    container.className = 'p-4 max-w-4xl mx-auto pb-24';

    const header = document.createElement('div');
    header.className = 'text-center mb-8 animate-fade-in-down';
    header.innerHTML = `
        <h1 class="text-4xl md:text-5xl text-mateo-purple mb-2 drop-shadow-sm font-fredoka">Salón de la Familia</h1>
        <p class="text-gray-600 font-semibold text-lg">Un espacio para charlar y compartir</p>
    `;
    container.appendChild(header);

    const chatContainer = document.createElement('div');
    chatContainer.className = 'bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-[600px] border-4 border-mateo-purple';

    // Chat Messages Area
    const messagesArea = document.createElement('div');
    messagesArea.className = 'flex-1 p-6 overflow-y-auto bg-gray-50 custom-scrollbar';
    messagesArea.id = 'chat-messages';
    chatContainer.appendChild(messagesArea);

    // Input Area
    const inputArea = document.createElement('div');
    inputArea.className = 'p-4 bg-white border-t border-gray-200 flex gap-4 items-center';
    inputArea.innerHTML = `
        <input type="text" id="username-input" placeholder="Tu Nombre" class="w-1/3 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mateo-purple font-bold text-mateo-purple">
        <input type="text" id="message-input" placeholder="Escribe un mensaje..." class="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mateo-purple">
        <button id="send-btn" class="bg-mateo-purple text-white p-3 rounded-xl hover:bg-purple-600 transition shadow-md transform hover:scale-105">
            <span class="text-xl">➤</span>
        </button>
    `;
    chatContainer.appendChild(inputArea);

    container.appendChild(chatContainer);

    // Logic
    let messages = storageService.getChatMessages();

    const renderMessages = () => {
        messagesArea.innerHTML = '';
        messages.forEach(msg => {
            const msgEl = document.createElement('div');
            msgEl.className = 'mb-4 animate-fade-in-up';
            msgEl.innerHTML = `
                <div class="flex flex-col">
                    <span class="text-xs font-bold text-mateo-purple mb-1 ml-2">${msg.user}</span>
                    <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 inline-block max-w-[80%] self-start">
                        <p class="text-gray-800">${msg.text}</p>
                        <span class="text-[10px] text-gray-400 block text-right mt-1">${new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                </div>
            `;
            messagesArea.appendChild(msgEl);
        });
        messagesArea.scrollTop = messagesArea.scrollHeight;
    };

    const handleSend = () => {
        const usernameInput = inputArea.querySelector('#username-input');
        const messageInput = inputArea.querySelector('#message-input');

        const user = usernameInput.value.trim();
        const text = messageInput.value.trim();

        if (!user) {
            alert('Por favor, escribe tu nombre.');
            return;
        }
        if (!text) return;

        messages = storageService.addChatMessage(user, text);
        renderMessages();
        messageInput.value = '';
    };

    inputArea.querySelector('#send-btn').onclick = handleSend;
    inputArea.querySelector('#message-input').onkeypress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    renderMessages();

    return container;
}

