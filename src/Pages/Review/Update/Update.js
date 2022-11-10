import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';

const Update = () => {
    const review = useLoaderData();
    const {name, serviceName, email, rating, comment, description} = review;
    const [updateReview, setUpdateReview] = useState(review);
    useTitle('Update Review')

    const handleUpdateReview = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/review/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount>0){
                    toast.success('Successfully updated your review');
                }
            })
    }
    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...updateReview}
        newReview[field] = value;
        setUpdateReview(newReview);
    }

    return (
        <div className='mt-10'>
            <h1 className='text-orange-500 text-2xl font-bold text-center '>Update your Review</h1>
            <div className=' text-rose-500 font-semibold mt-5 shadow-md w-full lg:w-1/3 rounded-lg mx-auto p-5'>
                <h4>Service Name: {serviceName}</h4>
                <p>Reviewer Name: {name}</p>
                <p>Email: {email}</p>
            </div>
            <form onSubmit={handleUpdateReview} className='bg-zinc-200 p-10 w-full lg:w-1/2 container mx-auto mt-5 shadow-lg rounded-lg mb-10'>
                <input onChange={handleInputChange} type="text" placeholder="Rating out of 5" defaultValue={rating} name='rating' className="input mt-2 input-bordered w-full" />
                <input onChange={handleInputChange}  type="text" placeholder="Comment" name='comment' defaultValue={comment} className="input mt-2 input-bordered w-full" />
                <textarea onChange={handleInputChange}  className="textarea textarea-bordered w-full mt-2 h-32" name='description' defaultValue={description} placeholder="Description"></textarea>
                <button type='submit' className='bg-green-500 p-3 mt-2 text-white font-semibold rounded-lg'>Sumbit Your Review</button>
            </form>
        </div>
    );
};

export default Update;