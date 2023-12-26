import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className={"w-full flex items-center justify-between pt-8 z-50"}>
      {/* Logo */}
      <a href="/" className="text-xl font-bold text-primary">
        Sandipan Kalita.
      </a>

      {/* Links (Hidden on Mobile) */}
      <div className="hidden sm:flex lg:flex space-x-4">
        <a href="/blog" className="px-3 py-2 hover:text-primary">
          Blog
        </a>
        <Link to="contact" smooth={true} duration={1500}>
          <p className="px-3 py-2 hover:text-primary">Contact</p>
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className="sm:hidden focus:outline-none" onClick={handleClick}>
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

      {isOpen && (
        <div className="sm:hidden absolute bg-gray-900 text-white rounded-lg py-2 px-4 top-10 right-0 mt-6 mr-7">
          <a
            href="/blog"
            className="block px-2 py-2 hover:bg-gray-800"
            onClick={handleClick}
          >
            Blog
          </a>
          <hr />
          <Link to="contact" smooth={true} duration={1000}>
            <p
              className="block px-2 py-2 hover:bg-gray-800"
              onClick={handleClick}
            >
              Contact
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
