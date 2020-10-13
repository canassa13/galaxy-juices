import { Text as ChakraText, TextProps } from '@chakra-ui/core';

const Text: React.FC<TextProps> = ({ children, ...rest }) => {
    return (
        <ChakraText fontSize={['sm', 'md', 'lg', 'xl']} {...rest}>
            {children}
        </ChakraText>
    );
};

export default Text;
