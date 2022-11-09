import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import ServicesCard from './ServicesCard';

const Services = () => {
    const {loading} = useContext(AuthContext);
    const [services, setServices] = useState([])
    useTitle('Services')
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if(loading){
        return <button className="btn loading mx-auto my-12 ml-96">loading</button>
    }

    return (
        <div>
            <h1 className='mt-10 text-2xl text-center font-bold text-orange-500'>See All My Photography Services</h1>
            <div className='container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
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