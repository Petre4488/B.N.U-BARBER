"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@Components/lamp";
import Image from "next/image";
import scissors from "../../public/scissors.svg";
import HeroHighlight from "../Components/HeroHighlight";
import FocusCards from "../Components/FocusCards";
import './globals.css';

export default function LampDemo() {
  return (
    <div className="flex flex-col items-center w-full " >
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: -80 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center py-4 mt-8 text-4xl font-medium tracking-tight text-transparent text-white font-Sancreek bg-gradient-to-br bg-clip-text md:text-7xl">
            B.N.U. Barber 
          </motion.h1>
      </LampContainer>
      <FocusCards />
      <HeroHighlight className="m-10" />
    </div>
  );
}
