import React from 'react';

const ClientServiceCard = ({ service }) => {
    const { username, userPhotoURL, title, servicePhotoURL, description } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={servicePhotoURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-left'>{description}</p>
                <div className="flex justify-start">
                    <div>
                        <img className='rounded-full w-8 h-8 mr-2' src={userPhotoURL} alt="" />
                    </div>
                    <div>
                        <p className='mt-1'>_Added by <span className='text-orange-500 underline'>{username}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientServiceCard;