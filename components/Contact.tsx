'use client';

import emailjs from '@emailjs/browser';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Container from './Container';

const initialFormData = {
  fromName: '',
  fromEmail: '',
  subject: '',
  message: '',
};

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/rafi-sakib-799b19228',
    label: 'LinkedIn',
    color: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: 'https://stackoverflow.com/users/13264167/md-samiur-rafi-sakib-1704062',
    label: 'Stack Overflow',
    color: '#F58025',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.747 4.569.906-1.94-9.748-4.569zm-1.84 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.99 15H16v2H1.99v-2zm-.33 4h14.604v2H1.66v-2z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/samiursakib',
    label: 'GitHub',
    color: '#8250DF',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688 3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65 3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z" />
      </svg>
    ),
  },
  {
    href: 'https://www.facebook.com/samiur.samiur.7',
    label: 'Facebook',
    color: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const inputClass =
  'w-full px-5 py-3.5 rounded-xl text-sm font-light ' +
  'bg-white/70 dark:bg-shadow/60 backdrop-blur-sm ' +
  'border border-platinum/50 dark:border-white/10 ' +
  'text-darker dark:text-lighter placeholder-jet/40 dark:placeholder-platinum/40 ' +
  'outline-none focus:border-[#06B4F1]/60 dark:focus:border-[#06B4F1]/60 ' +
  'focus:ring-2 focus:ring-[#06B4F1]/15 ' +
  'transition-all duration-300';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const toastify = (message: string, success: boolean) =>
    toast(message, {
      position: 'bottom-center',
      autoClose: 3000,
      className: `text-center font-bold ${success ? 'text-[#00a945]' : 'text-[#dd0426]'}`,
    });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        'service_5v3dlcd',
        'template_zau1wtk',
        formRef.current!,
        'yIRlzNWj8l6J4PMv2'
      )
      .then(
        () => {
          toastify('Message sent successfully!', true);
          setFormData(initialFormData);
          setIsSending(false);
        },
        () => {
          toastify('Sending message failed!', false);
          setIsSending(false);
        }
      );
  };

  return (
    <Container>
      <motion.div
        id="contact"
        className="px-6 py-20 max-w-6xl mx-auto w-full"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0D9488] mb-3">
            Say hello
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">Contact</h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B4F1] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          {/* Left — CTA + socials */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-4xl sm:text-5xl font-extrabold text-darker dark:text-lighter leading-tight mb-4">
                Let&apos;s work
                <br />
                <span className="gradient-text">together.</span>
              </h3>
              <p className="text-sm font-light text-jet/60 dark:text-platinum/60 leading-relaxed">
                Have a project in mind or want to discuss an opportunity?
                <br />
                I&apos;d love to hear from you.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-jet/40 dark:text-platinum/40">
                Find me on
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ href, label, color, icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="group relative w-11 h-11 flex items-center justify-center rounded-xl
                      bg-white/60 dark:bg-jet/40 backdrop-blur-sm
                      border border-platinum/40 dark:border-white/10
                      text-jet/50 dark:text-platinum/50
                      hover:border-transparent
                      transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    style={{
                      ['--hover-color' as string]: color,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = color;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${color}40`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${color}60`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '';
                      (e.currentTarget as HTMLElement).style.boxShadow = '';
                      (e.currentTarget as HTMLElement).style.borderColor = '';
                    }}
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-jet/40 dark:text-platinum/40 mb-2">
                Or email directly
              </p>
              <Link
                href="mailto:rafisamiur@gmail.com"
                className="text-sm font-medium text-[#06B4F1] hover:underline underline-offset-4"
              >
                rafisamiur@gmail.com
              </Link>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div variants={itemVariants}>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  name="fromName"
                  value={formData.fromName}
                  className={inputClass}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  name="fromEmail"
                  value={formData.fromEmail}
                  className={inputClass}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                className={inputClass}
                onChange={handleInputChange}
                required
              />
              <textarea
                placeholder="Your message..."
                name="message"
                value={formData.message}
                rows={5}
                className={`${inputClass} resize-none`}
                onChange={handleInputChange}
                required
              />

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden
                  disabled:opacity-70 disabled:cursor-not-allowed
                  transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/30"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #06B4F1)',
                }}
              >
                {/* Shimmer */}
                <span
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.18) 50%, transparent 80%)',
                    backgroundSize: '200% auto',
                  }}
                />
                <span className="relative z-10">
                  {isSending ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      <ToastContainer closeButton={false} />
    </Container>
  );
};

export default Contact;
