/** @format */

import { CloseOutlined } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const MobileNavigator: React.FC<ModalProps> = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className='duration-300 ease-in-out absolute top-0 left-0 w-full h-full bg-gray-800/60'>
      <div className='duration-300 ease-in-out w-9/12 h-full absolute top-0 right-0 z-50 bg-gradient-to-r from-blue-500 to-blue-800'>
        <div>
          <CloseOutlined
            className='absolute top-0 right-0 mx-4 my-4 scale-150 cursor-pointer text-white'
            onClick={handleClose}
          />
        </div>
        <div>
          <div className='flex flex-col items-center justify-center h-screen font-mono text-2xl text-center'>
            <ul>
              <li className='mob-nav-lins'>Projects</li>
              <li className='mob-nav-lins'>Tech</li>
              <li className='mob-nav-lins'>Contact</li>
            </ul>
            <button className='my-10 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'>
              <span className='text-2xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                Resume
              </span>
            </button>
          </div>
        </div>
      </div>
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
