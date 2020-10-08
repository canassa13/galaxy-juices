import { Text } from '@chakra-ui/core';
import Link from 'next/link';

const Item: React.FC = ({ children }) => {
    return (
        <Link href="/">
            <a>
                <Text
                    fontSize={['sm', 'md', 'lg', 'xl']}
                    color="gray.100"
                    transition="transform 0.2s"
                    _hover={{ transform: 'translateY(-4px)', color: 'gray.300' }}>
                    {children}
                </Text>
            </a>
        </Link>
    );
};

export default Item;
