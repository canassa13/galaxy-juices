import { FiFacebook, FiInstagram } from 'react-icons/fi';

import Flex from '../../components/layout/Flex';
import Text from '../../components/typography/Text';

const Footer: React.FC = () => {
    return (
        <Flex maxW="unset" bg="gray.600" h={200} justify="center" align="center" direction="column">
            <Flex>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/galaxyjuices"
                    style={{ margin: '0 20px' }}>
                    <FiFacebook size={25} color="white" />
                </a>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://instagram.com/galaxyjuicesbr"
                    style={{ margin: '0 20px' }}>
                    <FiInstagram size={25} color="white" />
                </a>
            </Flex>
            <Text py={10} color="white" textAlign="center">
                Política de privacidade termos e condições
            </Text>
            <Text color="white">© GALAXY JUICES 2020</Text>
        </Flex>
    );
};

export default Footer;
