import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 bg-white text-black z-50">
      {/* Logo */}
      <a href="/" className="text-xl font-bold">
        Sandipan Kalita.
      </a>

      {/* Links (Hidden on Mobile) */}
      <ul className="hidden lg:flex space-x-4">
        <li>
          <a href="/blog" className="text-black-300 hover:text-black px-3 py-2">
            Blog
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-black-300 hover:text-black px-3 py-2"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button className="lg:hidden" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu (Shown when open) */}
      {isOpen && (
        <ul className="lg:hidden absolute top-full left-0 w-full bg-gray-800 text-white z-60">
          <li>
            <a href="/about" className="block px-3 py-2 hover:bg-gray-700">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="block px-3 py-2 hover:bg-gray-700">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;