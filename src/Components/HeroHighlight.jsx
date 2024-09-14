"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../app/ui/hero-highlight";

export default function HeroHighlightDemo() {
  return (
    (<HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="max-w-4xl px-4 mx-auto text-2xl font-bold leading-relaxed text-center md:text-4xl lg:text-5xl text-neutral-100 lg:leading-snug ">
       Cu fiecare tunsoare, nimic nu e permanent. Totul se transformă. Fiecare șuviță e{" "}
        <Highlight className="text-white">
        o reflecție, peste o reflecție, peste o reflecție.
        </Highlight>
      </motion.h1>
    </HeroHighlight>)
  );
}
