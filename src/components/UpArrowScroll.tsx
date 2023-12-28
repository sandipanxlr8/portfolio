import { useEffect, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const UpArrowScroll = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Show button when scrolled past a certain section
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the threshold based on your content
      if (scrollPosition > 400) {
        buttonRef.current?.classList.remove("hidden");
      } else {
        buttonRef.current?.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    scroll.scrollToTop();
  };

  return (
    <button
      ref={buttonRef}
      className="up-arrow-button hidden fixed bottom-8 right-8 sm:bottom-12 sm:right-12 text-white bg-primary rounded-full p-4 shadow-md neumorph-shadow"
      onClick={handleClick}
    >
      <FaArrowUp />
    </button>
  );
};

export default UpArrowScroll;
