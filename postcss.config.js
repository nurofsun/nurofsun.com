module.exports = {
    plugins: process.env.NODE_ENV === 'production'
    ? [
        require('tailwindcss'),
        require('autoprefixer'),
        require('cssnano')
    ] : [
        require('tailwindcss')
    ]
}
