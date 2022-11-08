import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className='mt-10 text-2xl text-center font-bold text-orange-500'>See All My Photography Services</h1>
            <div className='cotainer mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    services.map(service => <ServicesCard
                    key={service._id}
                    service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;