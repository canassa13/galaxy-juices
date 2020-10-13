import { Flex as ChakraFlex, FlexProps } from '@chakra-ui/core';

const Flex: React.FC<FlexProps> = ({ children, ...rest }) => {
    return (
        <ChakraFlex marginX="auto" maxW="1440px" {...rest}>
            {children}
        </ChakraFlex>
    );
};

export default Flex;
