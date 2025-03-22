'use client';

import TypeString from '@/components/TypeString';
import Image from 'next/image';
import Container from './Container';

const About = () => {
  return (
    <Container><div id='about' className='p-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-12 pb-8 gap-8 place-items-center text-darker dark:text-lighter'>
        <div className='font-light text-center sm:text-left text-2xl space-y-2'>
          <div className='font-bold text-6xl'><TypeString strings={[`Hey! I'm Rafi Sakib, a NextJS developer.`]} /></div>
        </div>
        <div className=''>
          <Image
            src='coding.svg'
            width={0}
            height={0}
            alt='coding'
            className='-scale-x-100 w-full h-auto'
          />
        </div>
      </div>
      <p className="leading-7 text-sm col-span-2 text-justify font-extralight bg-whitesmoke dark:bg-shadow dark:text-lighter rounded-lg p-4">
        A computer science graduate from CUET with a strong passion for web development. Currently, I&apos;m immersed in mastering Next.js, a powerful framework for building modern web applications.
        My goal is to create innovative, user-friendly solutions that have a positive impact on the digital world. Explore my portfolio to see my work and connect for potential collaborations in the exciting realm of web development.
      </p>
    </div></Container>
  );
}

export default About;
