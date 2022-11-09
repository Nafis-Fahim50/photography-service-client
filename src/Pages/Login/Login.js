import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const { login, providerLogin, loading } = useContext(AuthContext);
    useTitle('Login')
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (loading) {
        return <button className="btn loading mx-auto my-12 ml-96">loading</button>
    }

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Successfully login with Google');
                const currentUser = {
                    email: user.email
                }
                // get jwt token from server
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('access-token', data.token)
                    })
                navigate(from, { replace: true });
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                toast.success('Successfully Login')
                const currentUser = {
                    email: user.email
                }
                // get jwt token from server
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('access-token', data.token)
                    })
                navigate(from, { replace: true });
            })
            .catch(err => {
                toast.error(err.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-blue-600 font-bold">Login now!</h1>
                    <p className="py-6">Login your account to access more features and submit your review.</p>
                    <p>Don't Have an Account?</p>
                    <Link to='/signup' className='text-blue-600 font-semibold'>Create an Account</Link>
                    <p className='my-2 text-orange-500 font-bold'>OR</p>
                    <hr />
                    <div>
                        <button onClick={handleGoogleLogin} className='bg-red-500 hover:bg-red-600 text-white p-3 mt-2 rounded-lg'><FaGoogle className='inline mb-1'></FaGoogle> Login With Google</button>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
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