import React from 'react';
import { Link } from 'react-router-dom';

const MyServicesCard = ({ myService }) => {
    const { title, img, price, description } = myService;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="bride-pic" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">Service Name: {title}</h2>
                <p className='text-left'>{description.slice(0, 100)}...</p>
                <p className='font-semibold'>Price: ${price}</p>
                <div className="card-actions ">
                    <Link to='/services'>
                        <button className="btn btn-primary">Show All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyServicesCard;