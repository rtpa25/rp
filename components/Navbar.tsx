/** @format */

import { Menu } from '@material-ui/icons';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useState } from 'react';
import { Link } from 'react-scroll';
import MobileNavigator from './MobileNavigator';

const Navbar = () => {
  const [vis, setVis] = useState<boolean>(false);
  return (
    <div className='flex justify-between mx-5 my-5 md:mx-40 '>
      <div
        className='font-mono text-3xl font-bold text-blue-800 cursor-pointer'
        onClick={() => {
          window.location.reload();
        }}>
        rp
      </div>
      <div className='hidden md:flex md:items-center'>
        <div className='nav-link'>
          <Link to='projects' smooth={true} duration={1000}>
            Projects
          </Link>
        </div>
        <div className='nav-link'>
          <Link to='tech' smooth={true} duration={1000}>
            Tech
          </Link>
        </div>
        <div className='nav-link'>
          <Link to='contact' smooth={true} duration={1000}>
            Contact
          </Link>
        </div>
        <button className='nav-button'>Resume</button>
      </div>

      <div className='relative text-blue-800 md:hidden'>
        {vis === false ? (
          <Menu
            className='top-0 right-0 mx-1 my-2 scale-150 cursor-pointer'
            onClick={() => {
              setVis(true);
              disableBodyScroll(document.querySelector('#modal-root')!);
            }}
          />
        ) : (
          <MobileNavigator
            show={vis}
            onClose={() => {
              setVis(false);
              enableBodyScroll(document.querySelector('#modal-root')!);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
