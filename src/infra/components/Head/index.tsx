import NextHead from 'next/head';

interface HeadProps {
    title?: string;
}

const Head: React.FC<HeadProps> = ({ title, children }) => {
    return (
        <NextHead>
            <title>{title}</title>
            {children}
        </NextHead>
    );
};

export default Head;
