"use client";

import { useState } from "react";
import MenuBar from "./MenuBar";
import ThemeBtn from "./ThemeBtn";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="flex items-center justify-between py-[30px]">
      <Link href="/">
        <p className="font-bold text-2xl">Kareem</p>
      </Link>
      <ul className="hidden items-center gap-4 sm:flex">
        <li>
          <Link
            href="/"
            className="text-lg hover:text-blue-900 transition-colors">
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-lg hover:text-blue-900 transition-colors">
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-lg hover:text-blue-900 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-lg hover:text-blue-900 transition-colors">
            Newsletter
          </Link>
        </li>
        <ThemeBtn />
      </ul>
      <MenuBar isOpen={isOpen} toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default NavBar;
