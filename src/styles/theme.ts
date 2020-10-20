import { extendTheme } from '@chakra-ui/core';

const customTheme = extendTheme({
    fonts: {
        body: 'Roboto, system-ui, sans-serif',
        heading: 'Roboto, system-ui, sans-serif',
        mono: 'Menlo, monospace'
    },
    colors: {
        white: '#f8f8f8',
        black: '#121214',
        gray: {
            500: '#a8a8b3',
            600: '#202024'
        }
    }
});

export default customTheme;
