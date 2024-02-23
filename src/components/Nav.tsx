import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='tw-flex tw-justify-end tw-w-screen tw-p-2'>
      <div className='tw-z-10'>
        <Hamburger toggled={isOpen} size={30} toggle={toggleNav} color='#fff' />
      </div>
      {isOpen && (
        <div className=' tw-bg-blue tw-absolute tw-top-0 tw-right-0 tw-w-1/4 tw-h-1/3 tw-pt-9 tw-pb-5 tw-rounded-bl-xl'>
          <ul className='tw-flex tw-flex-col tw-justify-around tw-text-white tw-items-center tw-h-full tw-pt-3 tw-text-2xl'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/#'>About</a>
            </li>
            <li>
              <a href='/#'>Shop</a>
            </li>
            <li>
              <a href='/#'>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
