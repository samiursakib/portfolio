'use client';
import { useState } from 'react';
import { PiMoonStarsFill } from 'react-icons/pi';
import { BsFillSunFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const navs = ['About', 'Skills', 'Projects', 'Contact'];
  const [isDarkModeOn, setDarkModeOn] = useState(false);
  return (
    <div className="bg-lighter dark:bg-darker flex justify-center">
      <div className="flex justify-between items-center w-2/3 bg-darker dark:bg-lighter text-lighter dark:text-darker rounded-full px-5 py-3">
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
        <div className='flex flex-row space-x-3 font-light text-sm'>
          {navs.map((nav, id) =>
            <Link className='group' key={id} href={`#${nav.toLowerCase()}`}>
              {nav}
              <span className="mx-auto transition-all duration-300 block h-[2px] w-0 dark:bg-darker bg-lighter group-hover:w-full"></span>
            </Link>
          )}
          </div>
        <div className='flex items-center'>
          <button className='text-xl' onClick={() => {
            document.body.classList.toggle('dark');
            setDarkModeOn(prev => !prev);
          }}>
            {isDarkModeOn ? <PiMoonStarsFill /> : <BsFillSunFill />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;