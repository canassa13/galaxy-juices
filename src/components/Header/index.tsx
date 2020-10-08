import { Flex } from '@chakra-ui/core';
import React from 'react';

import Item from './Item';

const Header: React.FC = () => {
    return (
        <Flex justify="space-between" align="center" h="80px" color="white">
            <Item>teste</Item>
            <Item>Loja</Item>
            <Item>Contato</Item>
            <Item>Minha Conta</Item>
        </Flex>
    );
};

export default Header;
