import React from 'react';
import toast from 'react-hot-toast';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className='w-11/12 max-w-[1160px] py-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-y-4'>
      <Link to="/">
        <img src={logo} alt='logo' width={160} height={32} loading='lazy' />
      </Link>

      <nav>
        <ul className='flex flex-col md:flex-row items-center gap-3 md:gap-x-6 text-white'>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className='flex flex-wrap gap-3 justify-center'>
        {!isLoggedIn && (
          <>
            <Link to='/login'>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg border border-white/20 hover:border-white transition duration-200'>
                Log In
              </button>
            </Link>
            <Link to='/signup'>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg border border-white/20 hover:border-white transition duration-200'>
                Sign Up
              </button>
            </Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <Link to='/dashboard'>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg border border-white/20 hover:border-white transition duration-200'>
                Dashboard
              </button>
            </Link>
            <Link to='/'>
              <button
                className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg border border-white/20 hover:border-white transition duration-200'
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}
              >
                Log Out
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
