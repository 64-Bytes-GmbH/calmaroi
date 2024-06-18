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
            },
            fontFamily: {
                'body': [
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
                ],
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
              }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
}