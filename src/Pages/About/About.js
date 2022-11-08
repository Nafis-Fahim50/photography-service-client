import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from '../../images/profile.jpg'
const About = () => {
    return (
        <div className="hero rounded-lg container mx-auto mt-10 bg-black">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} alt='about-pic' className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div className=''>
                    <h1 className="text-3xl text-left text-white font-bold">About Me</h1>
                    <p className="py-6 text-gray-300 text-left">Hey there, I'm Nafis Fahim!I’m a wedding photographer based in Bangladesh, and I’ve been photographing for almost 5 years.I specialize in making portraits of strangers on the street both digitally and with film. Truth is stranger than fiction, and I’ve always been compelled by that fact, especially here in Bangladesh. I’m represented by ClampArt, and I exhibit internationally.I also work as a freelance photography writer for Digital Photo Pro magazine and other industry publications. Right now I’m really passionate about a series of portraits I’m making in my neighborhood, Bed-Stuy, Brooklyn. It would be great to stay in touch. </p>
                    <div className='flex justify-start'>
                        <Link>
                            <FaFacebook className='text-orange-400 mr-2 w-6 h-6'></FaFacebook>
                        </Link>
                        <Link>
                            <FaTwitter className='text-sky-500 mr-2 w-6 h-6'></FaTwitter>
                        </Link>
                        <Link>
                            <FaInstagram className='text-red-500 mr-2 w-6 h-6'></FaInstagram>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;