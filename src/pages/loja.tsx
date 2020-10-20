import { Grid } from '@chakra-ui/core';

import Box from '../components/layout/Box';
import Head from '../infra/components/Head';
import Card from '../patterns/Card';
import Footer from '../patterns/Footer';
import Header from '../patterns/Header';

const Shop: React.FC = () => {
    return (
        <Box>
            <Head title="Galaxy Juices - Loja" />
            <Header fontColor="white" />
            <Box px={{ md: 10 }} pb={20}>
                <Grid gap={10} gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))">
                    {[0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                        <Card key={item} />
                    ))}
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
};

export default Shop;
