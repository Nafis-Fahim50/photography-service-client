import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Signup = () => {
    useTitle('Signup')
    const {createUser,userProfileUpdate, loading} = useContext(AuthContext);
    const navigate = useNavigate();

    if(loading){
        return <button className="btn loading mx-auto my-12 ml-96">loading</button>
    }

    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value
        const email = form.email.value;
        const password = form.password.value;
        
        const userInfo = {name,photoURL,email,password}
        console.log(userInfo);

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('Successfully Signup');
            form.reset();
            handleUpdateUser(name,photoURL);
            navigate('/login')
        })
        .catch(err =>{
            toast.error(err.message)
        })
    }

    const handleUpdateUser = (name,photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userProfileUpdate(profile)
            .then(() => { })
            .catch(error => {
                console.error('error', error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-yellow-400 font-bold">Signup now!</h1>
                    <p className="py-6">Don't have an account? Then create a new account. By opening a account you can explore more features. On the other hand you don't purchase any services without an account and missed many features.</p>
                    <p className='font-semibold'>Already Have an Account?</p>
                    <Link to='/login' className='text-blue-600 font-semibold'>Login your account</Link>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;