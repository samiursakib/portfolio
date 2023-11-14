'use client';

import { FormEvent, ChangeEvent, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import Image from 'next/image';

const initialFormData = {
  fromName: '',
  fromEmail: '',
  subject: '',
  message: ''
};

const socialLinks = [{
  source: '/social/linkedin.svg',
  linkTo: 'https://www.linkedin.com/in/rafi-sakib-799b19228',
  alt: 'linkedinIcon'
}, {
  source: '/social/stackoverflow.svg',
  linkTo: 'https://stackoverflow.com/users/13264167/md-samiur-rafi-sakib-1704062',
  alt: 'stackoverflowIcon'
}, {
  source: '/social/facebook.svg',
  linkTo: 'https://www.facebook.com/samiur.samiur.7',
  alt: 'facebookIcon'
}];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    emailjs.sendForm(
      'service_5v3dlcd',
      'template_zau1wtk',
      formRef.current!,
      'yIRlzNWj8l6J4PMv2'
    ).then(result => {
      setFormData(initialFormData);
    }, error => {
      throw new Error(error);
    })
  }

  return (
    <div id='contact' className='p-8 text-darker dark:text-lighter'>
      <p className='text-4xl font-extrabold pt-4 pb-12 text-center'>Contact</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center'>
        <div className='gap-4'>
          <div className='text-6xl font-bold'>Let's work together!</div>
          <div className='flex space-x-2 mt-8 items-center'>
            { socialLinks.map((link, id) => <Link
              key={id}
              href={link.linkTo}
              className='w-8 h-8 p-1'
            >
              <Image
                src={link.source}
                alt={link.alt}
                width={0}
                height={0}
                className='w-full h-full'
              />
            </Link> )}
            <Link
              href='https://github.com/samiursakib'
              className='w-9 h-9 p-1'
            >
              <svg className='fill-black dark:fill-white' data-name="Layer 1" viewBox="0 0 24 24"><path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688 3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65 3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z"/></svg>
            </Link>
          </div>
        </div>
        <form onSubmit={onSubmit} ref={formRef}
          className='w-full text-sm placeholder:text-sm'
        >
          <input
            type='text'
            placeholder='Your name'
            name='fromName'
            value={formData.fromName}
            className='bg-white dark:bg-shadow my-2 w-full border border-whitesmoke dark:border-shadow px-6 py-3 outline-none focus:border-[#cacaca] dark:focus:border-[#2f2f2f] shadow-sm rounded-md transition-all duration-300'
            onChange={handleInputChange}
          />
          <input
            type='email'
            placeholder='Your email'
            name='fromEmail'
            value={formData.fromEmail}
            className='bg-white dark:bg-shadow my-2 w-full border border-whitesmoke dark:border-shadow px-6 py-3 outline-none focus:border-[#cacaca] dark:focus:border-[#2f2f2f] shadow-sm rounded-md transition-all duration-300'
            onChange={handleInputChange}
          />
          <input
            type='text'
            placeholder='Subject'
            name='subject'
            value={formData.subject}
            className='bg-white dark:bg-shadow my-2 w-full border border-whitesmoke dark:border-shadow px-6 py-3 outline-none focus:border-[#cacaca] dark:focus:border-[#2f2f2f] shadow-sm rounded-md transition-all duration-300'
            onChange={handleInputChange}
          />
          <textarea
            placeholder='Message'
            name='message'
            value={formData.message}
            className='bg-white dark:bg-shadow my-2 w-full border border-whitesmoke dark:border-shadow px-6 py-3 outline-none focus:border-[#cacaca] dark:focus:border-[#2f2f2f] shadow-sm rounded-md transition-all duration-300'
            onChange={handleInputChange}
          ></textarea>
          <button type='submit' className='bg-[#129cce] hover:bg-[#06B4F1] px-6 py-3 text-white rounded-md text-xs mt-2 w-full outline-none border border-[#06B4F1] focus:border-[#06698d] transition-all duration-300 hover:'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;