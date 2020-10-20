import React from 'react';

import Head from '../infra/components/Head';
import Background from '../patterns/Background';
import Banner from '../patterns/Banner';
import Footer from '../patterns/Footer';
import Header from '../patterns/Header';

const Home: React.FC = () => {
    return (
        <>
            <Head title="Galaxy Juices BR" />
            <Background>
                <Header backgroundColor="transparent" fontColor="white" />
            </Background>
            <Banner />
            <Footer />
        </>
    );
};

export default Home;
