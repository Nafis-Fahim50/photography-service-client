import React, { useEffect, useState } from 'react';
import MyServicesCard from './MyServicesCard';

const MyServices = () => {
    const [myServices, setMyServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setMyServices(data))
    },[])
    return (
        <div className='mt-10'>
            <p className='text-orange-500 font-semibold'>My Services</p>
            <h3 className='text-3xl'>See My Services</h3>
            <div className='container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    myServices.map(myService => <MyServicesCard
                    key={myService._id}
                    myService={myService}></MyServicesCard>)
                }
            </div>
        </div>
    );
};

export default MyServices;