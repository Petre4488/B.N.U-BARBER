"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (<div className="w-4/5 border-2 border-black border-dashed rounded-sm" style={{ backgroundColor: 'rgba(240, 245, 250, 0.5)' }} >
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-10 w-full h-full bg-black/20" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0  grid place-items-center z-[100]">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full top-2 right-2 lg:hidden"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
            <motion.div layoutId={`image-${active.title}-${id}`}>
              <Image
                priority
                width={200}
                height={200}
                src={active.src}
                alt={active.title}
                className="object-cover object-top w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg" />
            </motion.div>

            <div>
              <div className="flex items-start justify-between p-4">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-neutral-700 dark:text-neutral-200">
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400">
                    {active.description}
                  </motion.p>
                </div>

                <motion.a
                  layoutId={`button-${active.title}-${id}`}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm font-bold text-white bg-green-500 rounded-full">
                  {active.ctaText}
                </motion.a>
              </div>
              <div className="relative px-4 pt-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul className="w-full max-w-2xl gap-4 mx-auto">
      {cards.map((card, index) => (
        <motion.div
          layoutId={`card-${card.title}-${id}`}
          key={`card-${card.title}-${id}`}
          onClick={() => setActive(card)}
          className="flex flex-col items-center justify-between p-4 cursor-pointer md:flex-row hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl">
          <div className="flex flex-col gap-4 md:flex-row ">
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <Image
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="object-cover object-top w-40 h-40 rounded-lg md:h-14 md:w-14" />
            </motion.div>
            <div className="">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-center text-neutral-800 dark:text-neutral-200 md:text-left">
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-center text-neutral-600 dark:text-neutral-400 md:text-left">
                {card.description}
              </motion.p>
            </div>
          </div>
          <motion.button
            layoutId={`button-${card.title}-${id}`}
            className="px-4 py-2 mt-4 text-sm font-bold text-black bg-gray-100 rounded-full hover:bg-green-500 hover:text-white md:mt-0">
            {card.ctaText}
          </motion.button>
        </motion.div>
      ))}
    </ul>
  </div>);
}

export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};

const cards = [
  {
    description: "B.N.U. Barber",
    title: "Tuns + Barba",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "50 lei",
    ctaLink: "",
    content: () => {
      return (
        (<p>Obține un look complet și îngrijit cu un tuns profesional, urmat de aranjarea perfectă a bărbii. Ideal pentru bărbații care doresc un aspect curat și stilat.
                  </p>)
      );
    },
  },
  {
    description: "B.N.U. Barber",
    title: "Tuns Barbati",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "40 lei",
    ctaLink: "",
    content: () => {
      return (
        (<p>O tunsoare modernă și precisă, realizată de specialiști. Perfect pentru cei care își doresc o schimbare fresh și la modă.
                  </p>)
      );
    },
  },

  {
    description: "B.N.U. Barber",
    title: "Tuns Clasic",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "35 lei",
    ctaLink: "",
    content: () => {
      return (
        (<p>Pentru cei care preferă eleganța atemporală, acest tuns clasic oferă un look rafinat și bine definit, potrivit pentru orice ocazie.
                  </p>)
      );
    },
  },
  {
    description: "B.N.U. Barber",
    title: "Aranjat Barba",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "20 lei",
    ctaLink: "",
    content: () => {
      return (
        (<p> Dă-i bărbii tale un aspect îngrijit și bine definit. Acest serviciu de aranjat barbă îți oferă forma perfectă, punându-ți în valoare trăsăturile.
                  </p>)
      );
    },
  },
  {
    description: "B.N.U. Barber",
    title: "Spalat si Aranjat",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "10 lei",
    ctaLink: "",
    content: () => {
      return (
        (<p>Răsfață-te cu un spălat revitalizant, urmat de aranjarea părului într-un stil care să te reprezinte. Ideal pentru un refresh rapid înainte de o zi importantă.
                                  </p>)
      );
    },
  },
];
