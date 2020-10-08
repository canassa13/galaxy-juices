import { Box } from '@chakra-ui/core';

import background from '../../assets/png/background.png';

const Background: React.FC = ({ children }) => {
    return (
        <Box
            px={5}
            height="100vh"
            bgImage={`url(${background})`}
            bgPos="center center"
            bgRepeat="no-repeat"
            bgSize="cover">
            {children}
        </Box>
    );
};

export default Background;
