import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const details = useLoaderData();
    const { title, img, description, price, rating, photographer, photographer_url } = details;
    return (
        <div>
            <div className='container mx-auto'>
                <h1 className='mt-10 text-2xl font-bold text-orange-500'><span className='text-rose-500'>{title}</span> Photograhy Details Info. </h1>
                <div className="card lg:card-side bg-base-100 mt-10 shadow-xl">
                    <img className='rounded-lg lg:w-1/2' src={img} alt="Album" />
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className='text-left'>{description}</p>
                        <p className='text-left font-semibold text-green-600'>Starting at: ${price}</p>
                        <div className="card-actions justify-start">
                            <div>
                                <img className='w-10 rounded-full' src={photographer_url} alt="" />
                            </div>
                            <div className="badge badge-outline mt-2">{photographer}</div>
                            <div className="badge badge-outline ml-2 mt-2 text-orange-400"><FaStar className='mr-2'></FaStar>{rating}</div>
                        </div>
                        <div className="card-actions">
                            <Link>
                                <button className='bg-orange-500 p-2 rounded-md mt-2 text-white'>Checkout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;