/** @format */

import { CloseOutlined } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Scroll, { Link } from 'react-scroll';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const scroller = Scroll.scroller;

const MobileNavigator: React.FC<ModalProps> = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const handleLink = (e: any, containerName: string) => {
    handleClose(e);
    console.log(e);

    scroller.scrollTo(containerName, {
      smooth: true,
    });
  };

  const modalContent = show ? (
    <div
      className='absolute top-0 left-0 w-full h-full duration-300 ease-in-out cursor-pointer bg-gray-800/60'
      onClick={handleClose}>
      <aside className='absolute top-0 right-0 z-50 w-9/12 h-full duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-blue-800'>
        <div>
          <CloseOutlined
            className='absolute top-0 right-0 mx-4 my-4 text-white scale-150 cursor-pointer'
            onClick={handleClose}
          />
        </div>
        <div>
          <div className='flex flex-col items-center justify-center h-screen font-mono text-2xl text-center'>
            <ul>
              <li
                className='mob-nav-lins'
                onClick={(e) => {
                  handleLink(e, 'projects');
                }}>
                Projects
              </li>
              <li
                className='mob-nav-lins'
                onClick={(e) => {
                  handleLink(e, 'tech');
                }}>
                Tech
              </li>
              <li
                className='mob-nav-lins'
                onClick={(e) => {
                  handleLink(e, 'contact');
                }}>
                Contact
              </li>
            </ul>
            <a
              className='my-10 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'
              href='/resume.pdf'>
              <span className='text-2xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                Resume
              </span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')!
    );
  } else {
    return null;
  }
};

export default MobileNavigator;
