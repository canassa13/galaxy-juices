import Flex from '../../components/layout/Flex';
import Text from '../../components/typography/Text';

const Banner: React.FC = () => {
    return (
        <Flex maxWidth="unset" bgColor="black">
            <Flex p={5} justify="center" align="center" direction="column">
                <Text textAlign="center" fontWeight="300" color="gray.500">
                    Sobre Nós
                </Text>
                <Text
                    marginBottom={4}
                    textAlign="center"
                    fontSize={{ base: '30px', md: '40px' }}
                    color="white"
                    fontWeight="600">
                    Uma galáxia contida em um frasco
                </Text>
                <Text
                    textAlign="center"
                    marginBottom={4}
                    fontWeight="300"
                    lineHeight="2em"
                    color="gray.500">
                    Desde 2018 no mercado, a galaxy juices produz ‘premium e-liquid’ para
                    vaporizadores e podsystems. com produtos de alta qualidade, grande variedade e
                    deliciosas receitas, visando sempre a harmonia entre os sabores que compõe nossa
                    galáxia.
                </Text>
                <Text
                    textAlign="center"
                    fontSize="16px"
                    fontWeight="300"
                    lineHeight="2em"
                    color="gray.500">
                    Criada em santa cruz do rio pardo, interior de São Paulo, nossa proposta é que
                    cada frasco seja uma experiência única.
                </Text>
            </Flex>
        </Flex>
    );
};

export default Banner;
