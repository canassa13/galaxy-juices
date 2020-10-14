import Flex from '../../components/layout/Flex';
import Text from '../../components/typography/Text';
import SocialMedia from '../../patterns/SocialMedia';

const Footer: React.FC = () => {
    return (
        <Flex
            as="footer"
            maxW="unset"
            bg="gray.600"
            h={200}
            justify="center"
            align="center"
            direction="column">
            <SocialMedia />
            <Text py={10} color="white" textAlign="center">
                Política de privacidade termos e condições
            </Text>
            <Text color="white">© GALAXY JUICES 2020</Text>
        </Flex>
    );
};

export default Footer;
