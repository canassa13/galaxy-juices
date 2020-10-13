import NextLink, { LinkProps } from 'next/link';

export type NextLinkProps = React.PropsWithChildren<LinkProps>;

const Link: React.FC<NextLinkProps> = ({ children, ...rest }) => {
    return (
        <NextLink {...rest}>
            <a>{children}</a>
        </NextLink>
    );
};

export default Link;
