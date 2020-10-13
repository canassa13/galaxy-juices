import { HeaderProps } from '..';
import Text from '../../../components/typography/Text';
import Link from '../../../infra/components/Link';

interface ItemProps extends HeaderProps {
    href: string;
}

const Item: React.FC<ItemProps> = ({ href, colorTheme, children }) => {
    return (
        <li>
            <Link href={href}>
                <Text color={colorTheme} _hover={{ color: 'yellow.300' }}>
                    {children}
                </Text>
            </Link>
        </li>
    );
};

export default Item;
