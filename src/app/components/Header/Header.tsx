"use client";
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 md:p-6 lg:p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="text-xl md:text-2xl font-bold">🧣 Scarf Boutique</h1>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-300 transition duration-300">
                🏠 Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-300 transition duration-300">
                ℹ️ About
              </Link>
            </li>
            <li>
              <Link href="/ScarfList" className="hover:text-blue-300 transition duration-300">
                🧣 ScarfList
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-300 transition duration-300">
                📞 Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
