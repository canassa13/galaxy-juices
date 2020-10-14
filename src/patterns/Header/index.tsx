import { useDisclosure } from '@chakra-ui/core';
import React from 'react';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';

import Box from '../../components/layout/Box';
import Flex from '../../components/layout/Flex';
import Drawer from '../Drawer';
import Item, { ListItemProps } from '../ListItem';

type HeaderProps = Pick<ListItemProps, 'fontColor'>;

const Header: React.FC<HeaderProps> = ({ fontColor = 'white' }) => {
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
                <Item href="/loja" fontColor={fontColor}>
                    Loja
                </Item>
                <Item href="/" fontColor={fontColor}>
                    Contato
                </Item>
                <Item href="/" fontColor={fontColor}>
                    Minha Conta
                </Item>
                <Item href="/carrinho" fontColor={fontColor}>
                    <FiShoppingCart color={fontColor} />
                </Item>
            </Box>
            <Box marginX="unset" display={{ base: 'flex', md: 'none' }} onClick={onOpen}>
                <FiMenu color={fontColor} />
            </Box>
            <Drawer isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
};

export default Header;
