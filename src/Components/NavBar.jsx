
"use client";

import { Button, Navbar } from "flowbite-react";
import logo from "../../public/logo.png";

export default function ComponentNavBar() {
  return (
    <Navbar fluid className="w-full mx-2 mb-3 text-white font-Sancreek bg-slate-950" >
      <Navbar.Brand href="" className="px-4 py-1 border-2 border-dashed border-zinc-200" >
        <img src="https://i.imgur.com/iG1XO68.png" className="pr-2 h-9 sm:h-9" alt="Flowbite React Logo" />
        <span className="">B.N.U. Barber</span>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <div className="p-2 px-4 mx-4 border-2 border-dashed border-zinc-200">Contact Us!</div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="p-3 px-4 border-2 border-dashed border-zinc-200">
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/preturi" className="text-white" >Preturi</Navbar.Link>
        <Navbar.Link href="/galerie" className="text-white">Galerie</Navbar.Link>
        <Navbar.Link href="/despre" className="text-white">Despre</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
