import { Input as ChakraInput, InputProps } from '@chakra-ui/core';

const Input: React.FC<InputProps> = ({ ...rest }) => {
    return <ChakraInput {...rest} />;
};

export default Input;
