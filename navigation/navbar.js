import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <header className="text-gray-900 body-font bg-slate-300 fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link href="/" className="text-xl pt-5 md:pt-0 font-Josefin">
            Ayzon
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* Default Menu */}
          <div className="">
            <ul className="hidden md:flex font-Josefin">
              <li className="px-2">
                <Link
                  href="/"
                  className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4 text-sm"
                >
                  Home
                </Link>
              </li>
              <li className="px-2">
                <Link
                  href="/products"
                  className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4 text-sm"
                >
                  Products
                </Link>
              </li>
              <li className="px-2">
                <Link
                  href="/about"
                  className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4 text-sm"
                >
                  About
                </Link>
              </li>
              <li className="px-2">
                <Link
                  href="/contact"
                  className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4 text-sm"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
      <div
        className={`${
          active ? "flex" : "hidden"
        } justify-start ml-4 items-center py-2`}
      >
        <ul className="font-Josefin">
          <li className="py-2">
            <Link
              href="/"
              className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4"
            >
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="/products"
              className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4"
            >
              Products
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="/about"
              className="lg:mx-2 mx-3 hover:text-gray-900 cursor-pointer hover:underline underline-offset-4"
            >
              About
            </Link>
          </li>
          <li className="py-2">
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
