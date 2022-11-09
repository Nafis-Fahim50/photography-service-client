import React, { useContext } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';


const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const menuItems = <>
        <li className='lg:text-white'>
            {
                user?.uid ?
                    <>
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt='' />
                            </div>
                        </div>
                        <p className='text-orange-500 p-0 font-bold'>Welcome {user?.displayName}</p>
                    </>
                    :
                    <></>
            }
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/blog'>Blog</Link>
            {
                user?.uid ?
                    <>
                        <Link to='/myreview'>My Reviews</Link>
                        <Link to='/addservice'>Add Service</Link>
                        <Link onClick={logout} to='/login'><button className='bg-red-600 p-2 rounded-md'><FaSignOutAlt className='inline mr-1'></FaSignOutAlt>Logout</button></Link>
                    </>
                    :
                    <>
                        <Link to='/signup'>Signup</Link>
                        <Link to='/login'>Login</Link>
                    </>
            }

        </li>
    </>
    return (
        <div className="navbar bg-gray-500 py-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-orange-500 text-xl">Nafis Photography</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;