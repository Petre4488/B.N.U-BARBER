"use client";

import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import character from './../../public/character.svg';
import scissors from './../../public/scissors.svg';

export const Reveal = ({ children }) => {
  return (
    <div className='relative overflow-hidden w-fit' >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}

      >{children}</motion.div>
    </div>
  )
}


export default function HomePage() {
  return (
    <div className='container flex items-center justify-center m-4 text-black font-Sancreek'
    style={{ backgroundImage: `url(../../../public/wallpaperhome.jpg )` }}  > 
      <div className="grid items-center grid-cols-12 gap-3 grid-rows-12 justify-items-center">
          <div className="col-span-2 text-4xl">MAKE</div>
          <div className="col-span-2 col-start-2 row-start-2 text-4xl">UNIQUE</div>
          <div className="col-span-2 col-start-1 row-start-3 text-4xl">STYLE</div>
          <div className="col-span-3 col-start-10 row-start-1 text-4xl">Service</div>
          <div className="col-span-2 col-start-6 row-start-2">B.N.U. BARBER</div>
          <div className="col-span-4 col-start-5 row-span-5 row-start-3">
            <Image src={character} alt='barber shop' className='w-full' />
          </div>
          <div className="col-span-2 col-start-2 row-start-5">Grooming tips</div>
          <div className="col-span-3 col-start-10 row-span-2 row-start-3">
            <Image src={scissors} alt='scissors' className='w-3/5'/>
          </div>
          <div className="col-span-3 col-start-10 row-start-6 p-3 text-4xl border-4 border-dashed border-zinc-600">
            Get in touch!
          </div>
          <div className="col-span-3 row-span-2 row-start-7">
            <Image src={scissors} alt='scissors' className='w-3/5'/>
          </div>
          <div className="col-span-4 col-start-9 row-span-3 row-start-9">
            <Image src={scissors} alt='scissors' className='w-3/5'/>
          </div>
          <div className="col-span-4 col-start-9 p-2 text-3xl border-2 border-dashed row-start-8 border-zinc-600">Transform Yourself</div>
          <div className="col-start-8 row-span-3 p-2 text-3xl rotate-90 border-2 border-dashed row-start-9 border-zinc-600 whitespace-nowrap">Transform Yourself</div>
          <div className="col-span-3 col-start-4 row-span-2 text-5xl text-center row-start-9 place-self-end">Unleash your swagger</div>
          <div className="col-span-3 col-start-4 row-span-2 font-mono text-center place-self-start row-start-11 ">More than cutting hair! Detail and a passion for creating unique style</div>
      </div>
    </div>
  );
}
