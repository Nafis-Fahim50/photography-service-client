import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import MyServices from '../MyServices/MyServices';
import VideoGraphy from '../VideoGraphy/VideoGraphy';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyServices></MyServices>
            <About></About>
            <VideoGraphy></VideoGraphy>
        </div>
    );
};

export default Home;