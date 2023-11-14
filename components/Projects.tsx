import Image from "next/image";
import Link from 'next/link';
import { MdLiveTv } from 'react-icons/md';
import { BiCodeAlt } from 'react-icons/bi';

const Projects = () => {

  const projects = [{
    id: 1,
    src: '/projects/chat-app',
    sourceLink: 'https://github.com/samiursakib/Chat-App',
    liveDemoLink: 'https://chat-app-amber-two.vercel.app/'
  }, {
    id: 2,
    src: '/projects/interactive-image-gallery',
    sourceLink: 'https://github.com/samiursakib/interactive-image-gallery',
    liveDemoLink: 'https://interactive-image-gallery.vercel.app/'
  }, {
    id: 3,
    src: '/projects/dnd-sortable-list',
    sourceLink: 'https://github.com/samiursakib/dnd-sortable-list',
    liveDemoLink: 'https://dnd-sortable-list.vercel.app/'
  }, {
    id: 4,
    src: '/projects/bd-districts-density',
    sourceLink: 'https://github.com/samiursakib/bd-districts-density',
    liveDemoLink: 'https://bd-districts-density.vercel.app/'
  }];

  return (
    <section id='projects' className="p-8 text-darker dark:text-lighter">
      <p className='text-4xl font-extrabold pt-4 pb-12 text-center'>Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        { projects.map(p => <div key={p.id} className="relative rounded-xl overflow-hidden group shadow-lg dark:shadow-shadow">
          <div className="bg-[#111] absolute top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-90 dark:group-hover:opacity-70 flex justify-center items-center transition-all duration-300">
            <div className="flex text-white gap-4 items-center justify-center">
              <Link href={p.liveDemoLink} className='w-10 h-10 p-2 border rounded-full flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300'><MdLiveTv className='text-2xl'/></Link>
              <Link href={p.sourceLink} className='w-10 h-10 p-2 border rounded-full flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300'><BiCodeAlt className='text-2xl' /></Link>
            </div>
          </div>
          <Image
            src={`${p.src}/1.png`}
            alt={p.src}
            width={200}
            height={200}
            className='w-full h-auto'
          />
        </div> )}
      </div>
    </section>
  );
}

export default Projects;