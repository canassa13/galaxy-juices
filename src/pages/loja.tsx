import { Grid } from '@chakra-ui/core';

import Box from '../components/layout/Box';
import Flex from '../components/layout/Flex';
import Head from '../infra/components/Head';
import Card from '../patterns/Card';
import Footer from '../patterns/Footer';
import Header from '../patterns/Header';

const Shop: React.FC = () => {
    return (
        <>
            <Head title="Galaxy Juices - Loja" />
            <Header fontColor="black" />
            <Box paddingX={{ base: 5 }} pb={20}>
                <Grid
                    alignItems="center"
                    gap={10}
                    gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))">
                    {[0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                        <Card key={item} />
                    ))}
                </Grid>
            </Box>
            <Footer />
        </>
    );
};

export default Shop;
