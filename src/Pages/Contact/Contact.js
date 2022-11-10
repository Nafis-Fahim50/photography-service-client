import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaMicrosoft, FaTwitter, FaYahoo } from 'react-icons/fa';


const Contact = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-3xl text-orange-500 font-bold text-center'>Contact With Me</h1>
            <div className='container mx-auto'>
                <div className='mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4'>
                    <a className='text-xl' href="https://web.facebook.com/nafisfahim28" target='_blank' rel="noopener noreferrer"><FaFacebook className='inline text-blue-700 mr-2 w-10 h-10'></FaFacebook>Facebook</a>
                    <a className='text-xl' href="https://twitter.com/NafisFahim4?fbclid=IwAR0yMbk2nxFN5D5nOAbHO2EA6gSIb5RcDRnX_YKkSotAwV5TtTn4hJI9anc" target='_blank' rel="noopener noreferrer"><FaTwitter className='inline text-sky-600 mr-2 w-10 h-10'></FaTwitter>Twitter</a>
                    <a className='text-xl' href="https://www.linkedin.com/in/nafis-fahim-2b73801a4/" target='_blank' rel="noopener noreferrer"><FaLinkedin className='inline text-sky-600 mr-2 w-10 h-10'></FaLinkedin>LinkedIn</a>
                    <a className='text-xl' href="https://www.instagram.com/nafis_fahim_" target='_blank' rel="noopener noreferrer"><FaInstagram className='inline text-rose-600 mr-2 w-10 h-10'></FaInstagram>Instagram</a>
                </div>
                <div className='mt-10'>
                    <h1 className='text-2xl text-center text-orange-500 font-bold'>Send Email</h1>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 lg:mt-10'>
                        <p className='text-xl'><FaGoogle className='inline text-red-600 w-8 h-8 mr-2'></FaGoogle>nafisf96@gmail.com</p>
                        <p className='text-xl'><FaMicrosoft className='inline text-blue-600 w-8 h-8 mr-2'></FaMicrosoft>nafisfahim50@outlook.com</p>
                        <p className='text-xl'><FaYahoo className='inline text-purple-700-600 w-8 h-8 mr-2'></FaYahoo>nafis_fahim@yahoo.com</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;