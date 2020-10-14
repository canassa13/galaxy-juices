import Text from '../../components/typography/Text';
import Link from '../../infra/components/Link';

export interface ListItemProps {
    href: string;
    fontColor?: string;
    fontSize?: string;
    hoveColor?: string;
}

const ListItem: React.FC<ListItemProps> = ({
    href,
    fontColor = 'white',
    fontSize,
    hoveColor = 'yellow.300',
    children
}) => {
    return (
        <li>
            <Link href={href}>
                <Text color={fontColor} fontSize={fontSize} _hover={{ color: hoveColor }}>
                    {children}
                </Text>
            </Link>
        </li>
    );
};

export default ListItem;
