import React, { useEffect, useState } from 'react';
import ClientServiceCard from './ClientServiceCard';

const ClientAddService = () => {
    const [userService, setUserService] = useState([]);

    useEffect(() => {
        fetch('https://nafis-photography-server.vercel.app/addservice')
            .then(res => res.json())
            .then(data => setUserService(data))
    }, [])

    return (
        <div className='mt-10 text-center'>
            <p className='text-orange-500 font-bold'>Client Service</p>
            <h1 className='text-2xl font-bold'>Services added by Client</h1>
            <p className='text-red-500 mt-2'>Total Services added by user: {userService.length}</p>
            <div className='container mx-auto mt-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    userService.map(service => <ClientServiceCard
                        key={service._id}
                        service={service}></ClientServiceCard>)
                }
            </div>
        </div>
    );
};

export default ClientAddService;