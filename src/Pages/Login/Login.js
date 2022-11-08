import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-blue-600 font-bold">Login now!</h1>
                    <p className="py-6">Login your account to access more features and submit your review.</p>
                    <p>Don't Have an Account?</p>
                    <Link to='/signup' className='text-blue-600 font-semibold'>Create an Account</Link>
                    <p className='my-2 text-orange-500 font-bold'>OR</p>
                    <hr />
                    <div>
                        <button className='bg-red-500 hover:bg-red-600 text-white p-3 mt-2 rounded-lg'><FaGoogle className='inline mb-1'></FaGoogle> Login With Google</button>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <Link  className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;