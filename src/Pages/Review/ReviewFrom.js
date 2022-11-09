import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const ReviewFrom = () => {
    const { user } = useContext(AuthContext);
    const services = useLoaderData();
    useTitle('Add Review')
    const { title, _id } = services;

    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'unregistered'
        const email = user?.email || 'unregistered'
        const photoURL = user?.photoURL || 'unregistered'
        const rating = form.rating.value;
        const comment = form.comment.value;
        const description = form.description.value;

        const reviewInfo = {
            service: _id,
            serviceName: title,
            name,
            email,
            photoURL,
            rating,
            comment,
            description
        }

        fetch('https://nafis-photography-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Successfully submit your review')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='mt-10'>
            <h3 className='text-2xl text-orange-500 text-center font-bold'>Submit Your Review</h3>
            <p className='text-center mt-2'>Service ID: {_id}</p>
            <p className='text-center'>Service Name: {title}</p>
            <form onSubmit={handleReviewSubmit} className='bg-zinc-200 p-10 w-full lg:w-1/2 container mx-auto mt-5 shadow-lg rounded-lg mb-10'>
                <input type="text" placeholder="name" defaultValue={user?.displayName} name='name' className="input  input-bordered w-full" />
                <input type="email" placeholder="email" defaultValue={user?.email} name='email' className="input mt-2 input-bordered w-full" />
                <input type="text" placeholder="photoURL" defaultValue={user?.photoURL} name='photoURL' className="input mt-2 input-bordered w-full" />
                <input type="text" placeholder="rating out of 5" name='rating' className="input mt-2 input-bordered w-full" />
                <input type="text" placeholder="comment" name='comment' className="input mt-2 input-bordered w-full" />
                <textarea className="textarea textarea-bordered w-full mt-2 h-32" name='description' placeholder="description"></textarea>
                <button className='bg-green-500 p-3 text-white font-semibold rounded-lg'>Sumbit Your Review</button>
            </form>
        </div>
    );
};

export default ReviewFrom;