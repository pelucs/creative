import Image from 'next/image';
import duo from '../assets/un-duo.webp';

export default () => {
  return(
    <div className="min-h-screen px-5 md:px-16 bg-gradient-to-t to-transparent to-95% via-black via-70% from-black">
      <div className="mt-20 flex items-center gap-10">
        <strong className="text-4xl md:text-7xl">
          Sobre nós
        </strong>

        <span className="py-2 px-3 rounded-full border border-zinc-700 text-zinc-400 text-xs font-bold">
          01 Duo
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-20">
        <Image src={duo} alt="Duo" className="w-full max-w-4xl"/>

        <p className="mt-5 md:mt-0 text-2xl leading-tight relative md:-left-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa ullam molestias 
          animi aut pariatur voluptatum quo nesciunt, ea cumque eum commodi, voluptatem omnis 
          distinctio asperiores nobis quisquam! Cumque, maiores?
        </p>
      </div>
    </div>
  );
}