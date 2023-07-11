'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-purple-700 text-white sticky top-0 z-10 mx-4 mb-0">
      <section className="max-w-4xl mx-auto p-4 flex justify-around items-center sm:flex-row">
        <div>
          <Link href={"/"}>
            <Image src="/logo.png" alt="" width={55} height={55} />
          </Link>
        </div>
        <div>
          <button
            className="text-3xl md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <Link href="/portfolio" className="hover:opacity-90">
              Portfolio
            </Link>
            <Link href="/services" className="hover:opacity-90">
              Services
            </Link>
            <Link href="/contact" className="hover:opacity-90">
              Contact
            </Link>
          </nav>
        </div>
      </section>
      {menuOpen && (
        <section className="absolute top-0 w-full text-5xl bg-purple-500 flex-col justify-content-center origin-top animate-open-menu">
          <button className="text-8xl self-end px-6" onClick={toggleMenu}>
            &times;
          </button>
          <nav
            className="flex flex-col min-h-screen items-center py-8"
            aria-label="mobile"
          >
            <Link href="/portfolio" className="w-full text-center py-6 hover:opacity-90">
              Portfolio
            </Link>
            <Link href="/services" className="w-full text-center py-6 hover:opacity-90">
              Services
            </Link>
            <Link href="/contact" className="w-full text-center py-6 hover:opacity-90">
              Contact
            </Link>
          </nav>
        </section>
      )}
    </div>
  );
};

export default Header;
