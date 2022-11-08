import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const details = useLoaderData();
    const {title} = details;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default ServiceDetails;