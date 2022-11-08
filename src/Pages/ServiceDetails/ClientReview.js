import React from 'react';
import { FaStar } from 'react-icons/fa';

const ClientReview = ({ rev}) => {
    const { rating, comment, description, name, photoURL} = rev;
    return (
        <div className='mt-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p><FaStar className='inline text-orange-500 mr-2 mb-1'></FaStar>{rating}/5</p>
                    <h2 className="card-title">{comment}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between'>
                        <img className='rounded-full w-10' src={photoURL} alt="" />
                        <p className='ml-2 mt-2'>_{name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;