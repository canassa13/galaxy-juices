import { ChakraProvider } from '@chakra-ui/core';
import { AppProps } from 'next/app';
import React from 'react';

import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};
export default MyApp;
