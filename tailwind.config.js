/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'canva-yellow': '#FFD93D',
                'canva-pink': '#FF6B9D',
                'canva-green': '#6BCB77',
                'canva-blue': '#4D96FF',
                'canva-purple': '#A78BFA',
                'canva-orange': '#FFA94D',
                'canva-sky': '#95E1D3',
                'canva-peach': '#FFB6B9',
                // Legacy colors for compatibility
                'mateo-blue': '#4D96FF',
                'mateo-yellow': '#FFD93D',
                'mateo-green': '#6BCB77',
                'mateo-purple': '#A78BFA',
                'mateo-red': '#FF6B9D',
            },
            fontFamily: {
                'fredoka': ['Fredoka', 'Comic Sans MS', 'cursive'],
                'poppins': ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
