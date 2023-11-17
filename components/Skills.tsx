'use client';

import Image from "next/image";
import { ReactNode } from "react";
import Chart from '@/components/Chart';
import { motion } from 'framer-motion';

const Skills = () => {
  const techToolsVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  const childVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    }
  }

  const techTools = ['Typescript', 'ReactJS', 'NextJS', 'Redux', 'Javascript', 'NodeJS', 'TailwindCSS', 'FramerMotion', 'Git', 'ExpressJS', 'SCSS', 'MongoDB', 'MySQL', 'HTML5', 'CSS3'];

  const SubHeader = ({ children }: { children: ReactNode }) => <p className='text-xl font-bold border-b border-whitesmoke dark:border-shadow pb-4'>{ children }</p>;

  return (
    <div id='skills' className="p-8 text-darker dark:text-lighter">
      <p className='text-4xl font-extrabold pt-4 pb-12 text-center'>Skills</p>
      <SubHeader>Programming Languages</SubHeader>
      <div className="flex justify-center py-8">
        <div className="flex justify-around sm:w-1/2 w-full flex-col gap-8">
          <div className="flex justify-center items-center [&>*]:px-4 [&>*]:py-3 gap-4 [&>*]:rounded-md [&>*]:text-white dark:[&>*]:text-black [&>*]:text-xs">
            <div className="bg-[#ff6384]">Python</div>
            <div className="bg-[#ffce56]">Javascript</div>
            <div className="bg-[#36a2eb]">C++</div>
          </div>
          <Chart />
        </div>
      </div>
      <SubHeader>Tech Tools</SubHeader>
      <motion.div className="flex gap-4 py-8 flex-wrap items-center" variants={techToolsVariants} initial='initial' whileInView='animate'>
        { techTools.map((tool, id) => <motion.div variants={childVariants} key={id} className='w-24 h-26 p-3 rounded-md bg-whitesmoke dark:bg-shadow flex flex-col items-center'>
          <Image
            src={`/icons/${tool.toLowerCase()}.svg`}
            alt={tool.toLowerCase()}
            width={50}
            height={50}
            className='w-full h-auto'
          />
          <div className='text-xs pt-4'>{tool}</div>
        </motion.div> )}
      </motion.div>
    </div>
  );
}

export default Skills;