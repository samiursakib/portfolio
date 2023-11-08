import Image from "next/image";
import { ReactNode } from "react";

const Skills = () => {
  const languages = [{
    name: 'cpp',
    height: 'h-16',
    color: '425797'
  }, {
    name: 'javascript',
    height: 'h-24',
    color: 'f8f545'
  }, {
    name: 'python',
    height: 'h-20',
    color: '44f025'
  }];

  const techTools = ['Typescript', 'ReactJS', 'NextJS', 'Redux', 'Javascript', 'NodeJS', 'TailwindCSS', 'MotionDiv', 'Git', 'ExpressJS', 'SCSS', 'MongoDB', 'SQL', 'HTML5', 'CSS'];

  const SubHeader = ({ children }: { children: ReactNode }) => <p className='text-xl font-bold border-b border-whitesmoke dark:border-shadow pb-4'>{ children }</p>;

  return (
    <div id='skills' className="p-8 text-darker dark:text-lighter">
      <p className='text-2xl font-extrabold pt-4 pb-12 text-center'>Skills</p>
      <SubHeader>Programming Languages</SubHeader>
      <div className="flex justify-center py-8">
        <div className="flex justify-around sm:w-1/2 w-full">
          { languages.map(l => <div className="flex justify-end h-44 w-10 flex-col items-center space-y-6">
            <div className="flex flex-col justify-end w-10 h-full bg-whitesmoke dark:bg-shadow rounded-md">
              <div className={`w-full ${l.height} bg-[#${l.color}] rounded-md`}></div>
            </div>
            <Image
              src={`${l.name}.svg`}
              width='0'
              height='0'
              alt={l.name}
              className='w-full h-auto'
            />
          </div> )}
        </div>
      </div>
      <SubHeader>Tech Tools</SubHeader>
      <div className="flex flex-row space-x-4 py-8 overflow-x-auto">
        { techTools.map(tool => <div className='p-4 rounded-md bg-whitesmoke dark:bg-shadow'>
          { tool }
        </div> )}
      </div>
    </div>
  );
}

export default Skills;