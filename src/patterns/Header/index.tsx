import { useDisclosure } from '@chakra-ui/core';
import React from 'react';
import { FiMenu, FiShoppingCart, FiUser } from 'react-icons/fi';

import Box from '../../components/layout/Box';
import Flex from '../../components/layout/Flex';
import Drawer from '../Drawer';
import Item, { ListItemProps } from '../ListItem';
import Search from '../Search';

interface HeaderProps extends Pick<ListItemProps, 'fontColor'> {
    backgroundColor?: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundColor = 'gray.600', fontColor }) => {
    const { onOpen, isOpen, onClose } = useDisclosure();

    return (
        <Flex
            bg={backgroundColor}
            as="ul"
            align="center"
            justify={{ base: 'space-between', md: 'center' }}
            px={5}
            h="80px"
            mb="60px">
            <Flex
                listStyleType="none"
                marginX={5}
                justifyContent="center"
                alignItems="center"
                w="100%">
                <Search />
            </Flex>
            <Box
                justifyContent="center"
                alignItems="center"
                ml="-60px"
                w="60px"
                display={{ base: 'none', md: 'flex' }}>
                <Item href="/loja" fontColor={fontColor}>
                    <FiUser size="25px" style={{ marginRight: '16px' }} />
                </Item>
                <Item href="/loja" fontColor={fontColor}>
                    <FiShoppingCart size="25px" />
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
