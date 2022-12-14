import React from 'react';
import img1 from '../../../images/img1.jpg'
import img2 from '../../../images/img3.jpg'
import img3 from '../../../images/img2.jpg'
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData = [
        {
            image: img1,
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full">
            {
              bannerData.map(slider => <BannerItem
              key={slider.id}
              slider={slider}></BannerItem>)  
            }
        </div>
    );
};

export default Banner;