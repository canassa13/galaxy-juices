import { FiEye } from 'react-icons/fi';

import mockCard from '../../assets/png/mockCard.png';
import Flex from '../../components/layout/Flex';
import Text from '../../components/typography/Text';
const Card: React.FC = () => {
    return (
        <Flex flexDirection="column" align="center" justify="center">
            <Flex
                w={300}
                h={300}
                bgPos="center center"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgImage={`url(${mockCard})`}
                cursor="pointer">
                <Flex
                    opacity={0}
                    w="100%"
                    h="100%"
                    align="flex-end"
                    transition="opacity 0.3s"
                    _hover={{
                        opacity: 1
                    }}>
                    <Flex
                        align="center"
                        justifyContent="center"
                        transition="background 0.2s"
                        background="rgba(0,0,0,0.6)"
                        _hover={{
                            background: 'rgba(0,0,0,0.8)',
                            opacity: 1
                        }}
                        h={10}
                        w="100%">
                        <FiEye color="white" />
                        <Text fontSize={16} pl={2} color="white">
                            Quick View
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex align="center" justify="center" flexDirection="column">
                <Text pt={3} fontSize="12px" color="gray.500">
                    Juices
                </Text>
                <Text fontSize="12px">Juice Saturno</Text>
                <Text color="green.400">R$ 20,00 - R$55,00</Text>
                <button>Ver Opções</button>
            </Flex>
        </Flex>
    );
};

export default Card;
