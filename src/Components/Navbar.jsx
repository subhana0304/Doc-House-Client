import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error));
    }

    const navItem = <div className='md:flex items-center navbar'>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/appointment">Appointment</NavLink></li>
    {
        user ?  
        <button onClick={handleLogOut} className='btn bg-[#F7A582] border-[#F7A582] text-white hover:bg-[#faa27c] hover:border-[#F7A582]'>LogOut</button> 
        : <li><NavLink to="/login">Login</NavLink></li>
        
    }
    </div>
    return (
        <div className="navbar absolute top-0 left-0 w-full bg-transparent z-50 text-white px-10 md:px-20 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img src="../../public/logo (3).png" alt="" className='w-[180px]' />
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;