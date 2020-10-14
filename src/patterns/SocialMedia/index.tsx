import { FiFacebook, FiInstagram } from 'react-icons/fi';

import Flex from '../../components/layout/Flex';

interface SocialMediaProps {
    colorTheme?: 'white' | 'black';
}

const SocialMedia: React.FC<SocialMediaProps> = ({ colorTheme = 'white' }) => {
    return (
        <Flex>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/galaxyjuices"
                style={{ margin: '0 20px' }}>
                <FiFacebook size={25} color={colorTheme} />
            </a>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com/galaxyjuicesbr"
                style={{ margin: '0 20px' }}>
                <FiInstagram size={25} color={colorTheme} />
            </a>
        </Flex>
    );
};

export default SocialMedia;
