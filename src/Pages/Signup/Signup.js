import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-yellow-400 font-bold">Signup now!</h1>
                    <p className="py-6">Don't have an account? Then create a new account. By opening a account you can explore more features. On the other hand you don't purchase any services without an account and missed many features.</p>
                    <p className='font-semibold'>Already Have an Account?</p>
                    <Link to='/login' className='text-blue-600 font-semibold'>Login your account</Link>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
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