import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCard = ({ service }) => {
    const { title, img, price, description, photographer, photographer_url, rating, _id } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p className='text-left'>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-between">
                    <div>
                        <img className='w-10 rounded-full' src={photographer_url} alt="" />
                    </div>
                    <div className="badge badge-outline mt-2">{photographer}</div>
                    <div className="badge badge-outline ml-2 mt-2 text-orange-400"><FaStar className='mr-2'></FaStar>{rating}</div>
                </div>
                <div className="card-actions mt-5 justify-between">
                    <div>
                        <p className='mt-3 text-orange-500 font-bold'>Price: $ {price}</p>
                    </div>
                    <div>
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-primary">Show Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;