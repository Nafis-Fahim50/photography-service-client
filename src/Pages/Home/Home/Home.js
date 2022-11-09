import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import ClientAddService from '../ClientAddService/ClientAddService';
import MyServices from '../MyServices/MyServices';
import VideoGraphy from '../VideoGraphy/VideoGraphy';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <MyServices></MyServices>
            <ClientAddService></ClientAddService>
            <About></About>
            <VideoGraphy></VideoGraphy>
        </div>
    );
};

export default Home;