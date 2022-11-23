import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewTable from './MyReviewTable';

const MyReview = () => {
    const { user, logout } = useContext(AuthContext);
    const [myreview, setMyReview] = useState([]);
    useTitle('My Review')

    useEffect(() => {
        fetch(`https://nafis-photography-server.vercel.app/userReview?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    return logout();
                }
                return res.json()
            })
            .then(data => setMyReview(data))
    }, [user?.email, logout])

    const handleDeleted = id =>{
        const processed = window.confirm('Are you sure to delete this item?');
        if(processed){
            fetch(`https://nafis-photography-server.vercel.app/userReview/${id}`,{
                method: 'DELETE'
            })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                toast.success('Successfully deleted item');
                const remaining = myreview.filter(rev => rev._id !== id);
                setMyReview(remaining);
            }
        })   

        }
    }

    return (
        <div className="overflow-x-auto w-full">
            <div className='my-10 text-orange-500 text-2xl font-bold text-center'>
                {
                    myreview.length >0 ? <p>Your total review is : {myreview.length}</p>
                    :
                    <p>Your haven't submit any reviews yet.</p>
                }
            </div>
            <table className="table-normal lg:table w-full">
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
                        review={review}
                        handleDeleted={handleDeleted}></MyReviewTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReview;