"use client";

import { navLinks } from "@/constants/nav-links";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex md:hidden cursor-pointer md:cursor-none"
        onClick={toggleMenu}
      >
        {!isOpen ? <Menu /> : <X />}
      </div>

      <div className={`md:hidden ${isOpen ? "block absolute w-full top-20 left-0 right-0 " : "hidden"}`}>
        <nav className="rounded-md bg-slate-800 p-2 transition-all z-50 ">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link === "home" ? "/" : `${link}`}
              className="block py-1 px-2 rounded-md hover:bg-slate-700 hover:text-sky-400"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
