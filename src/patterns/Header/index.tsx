import { useDisclosure } from '@chakra-ui/core';
import React from 'react';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';

import Box from '../../components/layout/Box';
import Flex from '../../components/layout/Flex';
import Drawer from '../Drawer';
import Item from './Item';

export interface HeaderProps {
    colorTheme?: 'white' | 'black';
}

const Header: React.FC<HeaderProps> = ({ colorTheme = 'white' }) => {
    const { onOpen, isOpen, onClose } = useDisclosure();

    return (
        <Flex px={5} align="center" justify="flex-end" h="80px" color="white">
            <Box
                as="ul"
                listStyleType="none"
                marginX="unset"
                justifyContent="space-between"
                alignItems="center"
                width="40%"
                display={{ base: 'none', md: 'flex' }}>
                <Item href="/loja" colorTheme={colorTheme}>
                    Loja
                </Item>
                <Item href="/" colorTheme={colorTheme}>
                    Contato
                </Item>
                <Item href="/" colorTheme={colorTheme}>
                    Minha Conta
                </Item>
                <Item href="/carrinho" colorTheme={colorTheme}>
                    <FiShoppingCart color={colorTheme} />
                </Item>
            </Box>
            <Box marginX="unset" display={{ base: 'flex', md: 'none' }} onClick={onOpen}>
                <FiMenu color={colorTheme} />
            </Box>
            <Drawer isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
};

export default Header;
