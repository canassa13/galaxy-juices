import Text from '../../components/typography/Text';
import Link from '../../infra/components/Link';

export interface ListItemProps {
    href: string;
    fontColor?: string;
    fontSize?: string;
    hoverColor?: string;
}

const ListItem: React.FC<ListItemProps> = ({
    href,
    fontColor,
    fontSize,
    hoverColor = 'gray.500',
    children
}) => {
    return (
        <li>
            <Link href={href}>
                <Text
                    fontWeight="700"
                    color={fontColor}
                    fontSize={fontSize}
                    transition="color 0.2s"
                    _hover={{ color: hoverColor }}>
                    {children}
                </Text>
            </Link>
        </li>
    );
};

export default ListItem;
