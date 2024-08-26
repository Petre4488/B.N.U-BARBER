"use client";

import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import character from './../../public/character.svg';
import scissors from './../../public/scissors.svg';
import wallpaperHero from './../../public/wallpaperHero.jpg';

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
    <div className='container flex items-center justify-center m-4 text-black font-Sancreek bg-slate-300'> 
      <div className="grid items-center gap-3 sm:grid-cols-12 sm:grid-rows-12 justify-items-center">

          <div className="text-4xl sm:col-span-2 sm:col-start-2 sm:row-start-2">UNIQUE</div>
          <div className="text-4xl sm:col-span-2 sm:col-start-1 sm:row-start-3">STYLE</div>
          <div className="text-4xl sm:col-span-3 sm:col-start-10 sm:row-start-1">Service</div>
          <div className="text-3xl sm:col-span-2 sm:col-start-6 sm:row-start-2 place-self-end">B.N.U. BARBER</div>
          <div className="sm:col-span-4 sm:col-start-5 sm:row-span-5 sm:row-start-3">
            <Image src={character} alt='barber shop' className='w-full' />
          </div>
          <div className="sm:col-span-2 sm:col-start-2 sm:row-start-5">Grooming tips</div>
          <div className="sm:col-span-3 sm:col-start-10 sm:row-span-2 sm:row-start-3">
            <Image src={scissors} alt='scissors' className='w-3/5'/>
          </div>
          <div className="p-3 text-4xl border-4 border-dashed sm:col-span-3 sm:col-start-10 sm:row-start-6 border-zinc-600">
            Get in touch!
          </div>
          <div className="col-span-3 sm:row-span-2 sm:row-start-7">
            <Image src={scissors} alt='scissors' className='w-3/5'/>
          </div>
          <div className="col-span-4 col-start-9 row-span-3 row-start-9">
            <Image src={scissors} alt='scissors' className='w-3/5'/>
          </div>
          <div className="p-2 text-3xl border-2 border-dashed sm:col-span-4 sm:col-start-9 row-start-8 border-zinc-600">Transform Yourself</div>
          <div className="p-2 text-3xl rotate-90 border-2 border-dashed sm:col-start-8 sm:row-span-3 row-start-9 border-zinc-600 whitespace-nowrap">Transform Yourself</div>
          <div className="text-5xl text-center sm:col-span-3 sm:col-start-4 sm:row-span-2 sm:row-start-9 place-self-end">Unleash your swagger</div>
          <div className="font-mono text-center sm:col-span-3 sm:col-start-4 sm:row-span-2 place-self-start sm:row-start-11 ">More than cutting hair! Detail and a passion for creating unique style</div>
      </div>
    </div>
  );
}
