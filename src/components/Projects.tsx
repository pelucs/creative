import Image from "next/image";

import project1  from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';

export default () => {
  return(
    <div className="mt-20 px-5 md:px-16 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex items-center gap-5">
          <strong className="text-4xl md:text-7xl">
            Projetos
          </strong>

          <span className="py-2 px-3 rounded-full border border-zinc-700 text-zinc-400 text-xs font-bold">
            10 projetos
          </span>
        </div>

        <div>
          <Image 
            src={project1} 
            alt="_" 
            className="hover:duration-300 hover:delay-200 hover:scale-105 transition-all grayscale hover:grayscale-0"
          />
          
          <div className="mt-5 flex items-center justify-between">
            <h1 className="text-2xl">
              Nome do projeto
            </h1>

            <span className="py-2 px-3 rounded-full border border-zinc-700 text-zinc-400 text-xs font-bold">
              01 / 2023
            </span>
          </div>
        </div>

        <div>
          <Image 
            src={project2} 
            alt="_" 
            className="hover:duration-300 hover:delay-200 hover:scale-105 transition-all grayscale hover:grayscale-0"
          />
          
          <div className="mt-5 flex items-center justify-between">
            <h1 className="text-2xl">
              Nome do projeto
            </h1>

            <span className="py-2 px-3 rounded-full border border-zinc-700 text-zinc-400 text-xs font-bold">
              02 / 2023
            </span>
          </div>
        </div>

        <div>
          <Image 
            src={project3} 
            alt="_" 
            className="hover:duration-300 hover:delay-200 hover:scale-105 transition-all grayscale hover:grayscale-0"
          />
          
          <div className="mt-5 flex items-center justify-between">
            <h1 className="text-2xl">
              Nome do projeto
            </h1>

            <span className="py-2 px-3 rounded-full border border-zinc-700 text-zinc-400 text-xs font-bold">
              03 / 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}