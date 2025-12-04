// LocalStorage Service for Mateo Web
// Replaces Firebase for a 100% free, client-side only experience.

const STORAGE_KEYS = {
    STORIES: 'mateo_stories_data',
    GALLERY: 'mateo_gallery_data',
    GUESTBOOK: 'mateo_guestbook_data',
    CHAT: 'mateo_chat_data'
};

// Helper to get data
const getData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
};

// Helper to save data
const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const storageService = {
    // --- Stories ---
    getStoryInteractions: (storyId) => {
        const data = getData(STORAGE_KEYS.STORIES);
        return data[storyId] || { likes: 0, comments: [] };
    },

    likeStory: (storyId) => {
        const data = getData(STORAGE_KEYS.STORIES);
        if (!data[storyId]) data[storyId] = { likes: 0, comments: [] };
        data[storyId].likes += 1;
        saveData(STORAGE_KEYS.STORIES, data);
        return data[storyId].likes;
    },

    commentStory: (storyId, user, text) => {
        const data = getData(STORAGE_KEYS.STORIES);
        if (!data[storyId]) data[storyId] = { likes: 0, comments: [] };
        const newComment = { user, text, timestamp: new Date().toISOString() };
        data[storyId].comments.push(newComment);
        saveData(STORAGE_KEYS.STORIES, data);
        return data[storyId].comments;
    },

    // --- Gallery ---
    getPhotoInteractions: (photoId) => {
        const data = getData(STORAGE_KEYS.GALLERY);
        return data[photoId] || { likes: 0, comments: [] };
    },

    likePhoto: (photoId) => {
        const data = getData(STORAGE_KEYS.GALLERY);
        if (!data[photoId]) data[photoId] = { likes: 0, comments: [] };
        data[photoId].likes += 1;
        saveData(STORAGE_KEYS.GALLERY, data);
        return data[photoId].likes;
    },

    commentPhoto: (photoId, user, text) => {
        const data = getData(STORAGE_KEYS.GALLERY);
        if (!data[photoId]) data[photoId] = { likes: 0, comments: [] };
        const newComment = { user, text, timestamp: new Date().toISOString() };
        data[photoId].comments.push(newComment);
        saveData(STORAGE_KEYS.GALLERY, data);
        return data[photoId].comments;
    },

    // --- Guestbook ---
    getGuestbookEntries: () => {
        const data = getData(STORAGE_KEYS.GUESTBOOK);
        return Array.isArray(data) ? data : [];
    },

    addGuestbookEntry: (name, message) => {
        let data = getData(STORAGE_KEYS.GUESTBOOK);
        if (!Array.isArray(data)) data = [];
        const newEntry = { name, message, timestamp: new Date().toISOString() };
        data.unshift(newEntry); // Add to top
        saveData(STORAGE_KEYS.GUESTBOOK, data);
        return data;
    },

    // --- Chat (Lounge) ---
    getChatMessages: () => {
        const data = getData(STORAGE_KEYS.CHAT);
        return Array.isArray(data) ? data : [];
    },

    addChatMessage: (user, text) => {
        let data = getData(STORAGE_KEYS.CHAT);
        if (!Array.isArray(data)) data = [];
        const newMessage = { user, text, timestamp: new Date().toISOString() };
        data.push(newMessage);
        // Keep only last 50 messages
        if (data.length > 50) data = data.slice(-50);
        saveData(STORAGE_KEYS.CHAT, data);
        return data;
    }
};
