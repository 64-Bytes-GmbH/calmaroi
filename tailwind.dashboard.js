module.exports = {
    content: [
        './app/templates/dashboard/**/*.html',
        './node_modules/flowbite/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#003764',
                'gray-300': '#D9E1E8',
                'gray-200': '#E6EBEF',
                'calmaroi-green': '#009420',
                'calmaroi-red': '#940000',
                'calmaroi-orange': '#FFA800'
            },
            fontFamily: {
                'sans': [
                    'Inter',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'system-ui',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji'
                ]
            },
            backgroundImage: {
                'green-gradient': 'linear-gradient(90deg, rgba(0, 148, 32, 0.3) 0%, rgba(137, 137, 137, 0.3) 100%)',
                'red-gradient': 'linear-gradient(90deg, rgba(148, 0, 0, 0.3) 0%, rgba(137, 137, 137, 0.3) 100%)',
                'orange-gradient': 'linear-gradient(90deg, rgba(255, 168, 0, 0.3) 0%, rgba(137, 137, 137, 0.3) 100%)',
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
}