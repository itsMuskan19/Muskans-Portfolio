// Update tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                'xs': '475px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                'cream': '#FFF9E6',
                'accent-yellow': '#FFE8A8',
                'navbar-text': '#5A5A5A',
            }
        },
    },
    plugins: [],
}