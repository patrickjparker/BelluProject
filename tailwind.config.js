module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        colors: {
            blue: {
                0: '#778996',
                1: '#a4b0be',
                2: '#bac8d8'
            },
            accent: {
                0: '#ccd1d7',
                1: '#e5e8ea',
                2: '#f2f2f2'
            },
            beige: '#ede7df',
            red: {
                0: '#bf847a',
                1: '#e1c2bd'
            },
            black: {
                0: '#3a3b3d',
                1: '#525457'
            },
            grey: {
                0: '#75787c',
                1: '#a5a9ae',
                2: '#f2f2f2'
            },
            white: '#ffffff',
        },
        extend: {
            dropShadow: {
                '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}