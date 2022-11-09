import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddService = () => {
    const {user} = useContext(AuthContext);

    const handleAddService = event =>{
        event.preventDefault();
        const form = event.target;
        const username = user?.displayName || 'unregistered'
        const email = user?.email || 'unregistered'
        const userPhotoURL = user?.photoURL || 'unregistered'
        const title = form.title.value;
        const servicePhotoURL = form.serviceURL.value;
        const description = form.description.value;
        
        const serviceInfo = {
            username,
            email,
            userPhotoURL,
            title,
            servicePhotoURL,
            description
        }

        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Successfully submit your services')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h1 className='mt-10 text-center text-orange-500 text-2xl font-bold'>Add your own service that you want!!!</h1>
            <p className='w-1/2 mx-auto mt-2'>Here I am providing a form where you can choice your own services. If your services is avaliable then I will contract you as soon as possible. So, if you want to customize service then at first you should sumbit this service form. You can see your service in our website. Visit our home page to see your added service. Not only you but aslo on the main page you can aslo see other user customize services.</p>
            <h1 className='mt-5 text-2xl text-green-600 font-extrabold text-center'>Sumbit this Service Form</h1>

            <form onSubmit={handleAddService} className='bg-zinc-200 p-10 w-1/2 container mx-auto mt-5 shadow-lg rounded-lg mb-10'>

                <input type="text" placeholder="name" defaultValue={user?.displayName} name='name' className="input  input-bordered w-full" />

                <input type="email" placeholder="email" defaultValue={user?.email} name='email' className="input mt-2 input-bordered w-full" />

                <input type="text" placeholder="photoURL" defaultValue={user?.photoURL} name='userPhotoURL' className="input mt-2 input-bordered w-full" />

                <input type="text" placeholder="Service Title" name='title' className="input mt-2 input-bordered w-full" />

                <input type="text" placeholder="Service Image URL" name='serviceURL' className="input mt-2 input-bordered w-full" />

                <textarea className="textarea textarea-bordered w-full mt-2 h-32" name='description' placeholder="Explain the service"></textarea>
                <button className='bg-green-500 p-3 text-white font-semibold rounded-lg'>Sumbit</button>

            </form>
        </div>
    );
};

export default AddService;