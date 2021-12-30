/** @format */

import { useState } from 'react';
import { Menu } from '@material-ui/icons';
import MobileNavigator from './MobileNavigator';

const Navbar = () => {
  const [vis, setVis] = useState<boolean>(false);
  return (
    <div className='flex justify-between mx-5 my-5 md:mx-20'>
      <div
        className='font-mono text-3xl font-bold text-blue-800 cursor-pointer'
        onClick={() => {
          window.location.reload();
        }}>
        rp
      </div>
      <div className='hidden md:flex md:items-center'>
        <div className='nav-link'>Projects</div>
        <div className='nav-link'>Tech</div>
        <div className='nav-link'>Contact</div>
        <button className='nav-button'>Resume</button>
      </div>

      <div className='relative text-blue-800 md:hidden'>
        {vis === false ? (
          <Menu
            className='top-0 right-0 mx-1 my-2 scale-150 cursor-pointer'
            onClick={() => {
              setVis(true);
            }}
          />
        ) : (
          <MobileNavigator
            show={vis}
            onClose={() => {
              setVis(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
