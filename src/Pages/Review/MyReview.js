import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyReviewTable from './MyReviewTable';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myreview, setMyReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/userReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [user?.email])

    return (
        <div className="overflow-x-auto w-full">
            <div className='my-10 text-orange-500 text-2xl font-bold text-center'>
                {
                    myreview.length >0 ? <p>Your total review is : {myreview.length}</p>
                    :
                    <p>Your haven't submit any reviews yet.</p>
                }
            </div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Service</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myreview.map(review=><MyReviewTable
                        key={review._id}
                        review={review}></MyReviewTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReview;