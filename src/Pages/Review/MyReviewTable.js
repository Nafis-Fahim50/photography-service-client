import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReviewTable = ({ review, handleDeleted }) => {
    const { name, email, _id, rating, photoURL, serviceName, description, service } = review;

    const [reviewService, setReviewService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])

    return (
        <tr className='hover'>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img className='rounded-full w-10' src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm text-orange-500">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img className='rounded-full w-10' src={reviewService.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <p className="text-sm"><FaStar className='inline text-orange-500 mr-2 mb-1'></FaStar>{rating}</p>
                    </div>
                </div>
            </td>
            <td>{description}</td>
            <th>
                <Link to='/update'><button className="btn btn-ghost font-semibold text-yellow-400">Edit</button></Link>
                <button onClick={()=>handleDeleted(_id)} className="btn btn-ghost font-semibold text-red-600">Delete</button>
            </th>
        </tr>
    );
};

export default MyReviewTable;