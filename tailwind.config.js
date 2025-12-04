/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'mateo-blue': '#4FC3F7',
                'mateo-yellow': '#FFF176',
                'mateo-red': '#FF8A65',
                'mateo-green': '#81C784',
                'mateo-purple': '#BA68C8',
            },
            fontFamily: {
                'sans': ['Nunito', 'sans-serif'],
                'display': ['Fredoka One', 'cursive'],
            },
        },
    },
    plugins: [],
}
