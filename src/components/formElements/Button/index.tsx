import { Button as ChakraButton, ButtonProps } from '@chakra-ui/core';

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return <ChakraButton {...rest}>{children}</ChakraButton>;
};

export default Button;
