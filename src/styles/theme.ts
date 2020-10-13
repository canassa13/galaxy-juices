import { extendTheme } from '@chakra-ui/core';

const customTheme = extendTheme({
    fonts: {
        body: 'Bungee, system-ui, sans-serif',
        heading: 'Bungee, system-ui, sans-serif'
    },
    colors: {
        gray: {
            500: '#686868',
            600: '#3A3A3A'
        }
    }
});

export default customTheme;
