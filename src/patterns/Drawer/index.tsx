import {
    Drawer as DrawerChakra,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay
} from '@chakra-ui/core';

import Button from '../../components/formElements/Button';
import Flex from '../../components/layout/Flex';
import SocialMedia from '../../patterns/SocialMedia';
import Item from '../ListItem';
interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
    const color = 'black';
    return (
        <DrawerChakra size="xs" isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader textAlign="center">Galaxy Juices</DrawerHeader>
                    <DrawerBody>
                        <Flex
                            as="ul"
                            listStyleType="none"
                            flex={1}
                            justifyContent="space-between"
                            alignItems="center"
                            flexDirection="column">
                            <Item href="/loja" fontColor={color}>
                                Loja
                            </Item>
                            <Item href="/" fontColor={color}>
                                Contato
                            </Item>
                            <Item href="/" fontColor={color}>
                                Minha Conta
                            </Item>
                            <Item href="/carrinho" fontColor={color}>
                                Meu Carrinho
                            </Item>
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter>
                        <Flex w="100%" flexDirection="column">
                            <SocialMedia colorTheme="black" />
                            <Button marginTop={5}>Login</Button>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerOverlay>
        </DrawerChakra>
    );
};

export default Drawer;
