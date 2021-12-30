/** @format */

import React from 'react';
import Menu from '@material-ui/icons/Menu';

const Navbar = () => {
  return (
    <div className='flex justify-between md:mx-20 my-10 mx-5'>
      <div
        className='font-bold text-3xl text-blue-800 cursor-pointer font-mono'
        onClick={() => {
          window.location.reload();
        }}>
        rp
      </div>
      <div className='md:flex md:items-center hidden'>
        <div className='nav-link'>Projects</div>
        <div className='nav-link'>Tech</div>
        <div className='nav-link'>Contact</div>
        <button className='nav-button'>Resume</button>
      </div>
      <div className='md:hidden text-blue-800'>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
