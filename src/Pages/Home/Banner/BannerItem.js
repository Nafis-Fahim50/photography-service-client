import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.css'
const BannerItem = ({ slider }) => {
    const { image, id, next, prev } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-3/4">
            <div className='carousel-image w-full h-4/5'>
                <img src={image} alt='' className="w-full h-4/5" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-20 lg:top-80">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <p className='text-white mt-24 font-semibold'>Hey there! I'm Nafis Fahim</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 mt-5 lg:mt-10 top-1/4">
                <p className='lg:text-4xl mt-24 font-extrabold text-orange-500'>Wedding & Event Photographer</p>
            </div>
            <div className="hidden lg:block absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  mt-12 lg:mt-24 top-1/4">
                <p className='text-white mt-24 font-semibold'>If you are looking for best wedding photography service? Then here you can find different type of wedding photography services.
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 mt-16 lg:mt-40 top-1/4">
                <Link to='/contact'>
                    <button className="p-2 lg:p-3 mt-24 rounded-lg font-semibold text-white bg-orange-500 mr-5">Contact Me</button>
                </Link>
            </div>
        </div>
    );
};

export default BannerItem;