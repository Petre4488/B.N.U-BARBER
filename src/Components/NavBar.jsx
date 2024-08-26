
"use client";

import { Button, Navbar } from "flowbite-react";
import logo from "../../public/logo.png";

export default function ComponentNavBar() {
  return (
    <Navbar fluid className="w-full mx-2 mb-3 font-Sancreek bg-slate-100" >
      <Navbar.Brand href="" className="px-4 py-1 border-2 border-dashed border-zinc-600" >
        <img src="https://i.imgur.com/AKWuGtP.png" className="pr-2 h-9 sm:h-9" alt="Flowbite React Logo" />
        <span className="text-black">B.N.U. Barber</span>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <div className="p-2 px-4 mx-4 text-black border-2 border-dashed border-zinc-600">Contact Us!</div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="p-3 px-4 border-2 border-dashed border-zinc-600">
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Location</Navbar.Link>
        <Navbar.Link href="#">Gallery</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
