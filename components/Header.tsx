'use client';
import { useState } from 'react';
import { PiMoonStarsFill } from 'react-icons/pi';
import { BsFillSunFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const navs = ['About', 'Skills', 'Projects', 'Contact'];
  const [isDarkModeOn, setDarkModeOn] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  return (
    <div className="bg-lighter dark:bg-darker flex justify-center">
      <div className={`flex justify-between items-center bg-darker dark:bg-lighter text-lighter dark:text-darker px-4 py-3 relative transition-all ${isOverlayOpen ? 'w-full rounded-[0px]' : 'w-2/3 rounded-[9999px] delay-300'}`}>
        <div>
          <Link href={'/'}>
            <Image
              src='/logo.png'
              width={30}
              height={30}
              alt='logo'
            />
          </Link>
        </div>
        <div className='hidden sm:flex flex-row space-x-3 font-light text-sm'>
          {navs.map((nav, id) =>
            <Link className='group' key={id} href={`#${nav.toLowerCase()}`}>
              {nav}
              <span className="mx-auto transition-all duration-300 block h-[2px] w-0 dark:bg-darker bg-lighter group-hover:w-full"></span>
            </Link>
          )}
        </div>
        <div className='flex sm:hidden relative justify-center items-center p-4 hover:cursor-pointer h-0' onClick={() => setIsOverlayOpen(prev => !prev)}>
          <span className={`${isOverlayOpen ? 'w-[28px] rotate-45' : 'w-[22px] -translate-y-2'} absolute h-[2px] bg-lighter dark:bg-darker block transition-all duration-300`}></span>
          <span className={`${isOverlayOpen ? 'opacity-0' : 'opacity-100'} absolute w-[22px] h-[2px] bg-lighter dark:bg-darker block transition-all duration-300`}></span>
          <span className={`${isOverlayOpen ? 'w-[28px] -rotate-45' : 'w-[22px] translate-y-2'} absolute h-[2px] bg-lighter dark:bg-darker block transition-all duration-300`}></span>
        </div>
        <div className='flex items-center p-1'>
          <button className='text-2xl' onClick={( ) => {
            document.body.classList.toggle('dark');
            setDarkModeOn(prev => !prev);
          }}>
            {isDarkModeOn ? <PiMoonStarsFill /> : <BsFillSunFill />}
          </button>
        </div>
        <div className={`${isOverlayOpen ? 'h-screen delay-150' : 'h-0'} absolute w-full left-1/2 -translate-x-1/2 top-full bg-darker dark:bg-lighter text-lighter dark:text-darker transition-all overflow-hidden z-10`}>
          <div className={`top-0 bottom-0 left-0 right-0`}>
            {navs.map((nav, id) => <Link
              key={id}
              href={`#${nav.toLowerCase()}`}
              onClick={() => setIsOverlayOpen(prev => !prev)}
              className='px-6 py-4 border-t border-t-shadow dark:border-t-whitesmoke block text-center hover:bg-shadow dark:hover:bg-whitesmoke transition-all duration-300'
            >
              {nav}
            </Link>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;