import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ClientReview from './ClientReview';

const ServiceDetails = () => {
    const details = useLoaderData();
    const { title, _id, img, description, price, rating, photographer, photographer_url } = details;

    const [review,setReview] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])

    return (
        <div>
            <div className='container mx-auto'>
                <h1 className='mt-10 text-2xl text-center font-bold text-orange-500'><span className='text-rose-500'>{title}</span> Photograhy Details Info. </h1>
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
                                <button className='bg-orange-500 p-3 rounded-md mt-2 text-white'>Checkout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* review section  */}
            <div className='container mx-auto mt-10'>
                <h1 className='text-3xl text-orange-500 font-bold'>Client Review</h1>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        review.map(rev =><ClientReview
                        key={rev._id}
                        rev={rev}></ClientReview>)
                    }
                </div>
                <Link to={`/review/${_id}`}>
                    <button className='bg-green-500 p-3 mt-5 rounded-lg text-white'>Add Your Review</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;