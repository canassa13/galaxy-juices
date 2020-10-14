import background from '../../assets/svg/background.svg';
import Box from '../../components/layout/Box';

const Background: React.FC = ({ children }) => {
    return (
        <Box
            maxW="unset"
            height="100vh"
            bgImage={`url(${background})`}
            bgPos="center center"
            bgRepeat="no-repeat"
            bgSize="cover">
            {children}
        </Box>
    );
};

export default Background;
