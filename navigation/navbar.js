import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <header className="text-gray-900 body-font bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="text-xl">AYZON</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div className="">
            <ul className="hidden md:flex">
              <li>
                <Link
                  href="/"
                  className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => {
                showMenu();
              }}
            >
              <svg
                className="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      <div className={`${active ? "flex" : "hidden"} justify-start ml-4 items-center py-2`}>
        <ul>
          <li>
            <Link
              href="/"
              className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
