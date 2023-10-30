import Image from "next/image";

const Skills = () => {
  const languages = [{
    name: 'c++',
    prof: 24,
    color: '#324889'
  }, {
    name: 'javascript',
    prof: 36,
    color: '#F0E962'
  }, {
    name: 'python',
    prof: 40,
    color: '#8BFF76'
  }];
  return (
    <div id='skills' className="pt-12 text-center text-darker dark:text-lighter">
      <p>Skills section</p>
      <div className="flex justify-center">
        <div className="flex justify-between w-1/2">
          <div className="flex justify-end h-40 flex-col items-center space-y-2">
            <div className='w-20 h-28 bg-[#13318a] rounded-md'></div>
            <Image
              src='cpp.svg'
              width='0'
              height='0'
              alt='cpp'
              className='w-10 h-auto'
            />
            <h2>c++</h2>
          </div>
          <div className="flex justify-end h-40 flex-col items-center space-y-2">
            <div className='w-20 h-36 bg-[#fffb19] rounded-md'></div>
            <Image
              src='javascript.svg'
              width='0'
              height='0'
              alt='cpp'
              className='w-10 h-auto'
            />
            <h2>javascript</h2>
          </div>
          <div className="flex justify-end h-40 flex-col items-center space-y-2">
            <div className='w-20 h-full bg-[#44f025] rounded-md'></div>
            <Image
              src='python.svg'
              width='0'
              height='0'
              alt='cpp'
              className='w-10 h-auto'
            />
            <h2>python</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;