import { Box as ChakraBox, BoxProps } from '@chakra-ui/core';

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
    return (
        <ChakraBox marginX="auto" maxW="1440px" {...rest}>
            {children}
        </ChakraBox>
    );
};

export default Box;
