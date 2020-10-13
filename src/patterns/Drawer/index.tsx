import {
    Drawer as DrawerChakra,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay
} from '@chakra-ui/core';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
    return (
        <DrawerChakra isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>dasdasda</DrawerBody>

                    <DrawerFooter>dadasdas</DrawerFooter>
                </DrawerContent>
            </DrawerOverlay>
        </DrawerChakra>
    );
};

export default Drawer;
