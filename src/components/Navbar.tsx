import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[300px] md:w-[400px] md:max-w-[400px] animate-[slideDown_0.6s_ease-out]">
        <div
          className={`rounded-[2rem] shadow-lg border transition-all duration-500 p-5 ${
            isScrolled
              ? "backdrop-blur-xl bg-white/70 dark:bg-gray-900/70"
              : "backdrop-blur-none bg-transparent"
          }`}
          style={{
            borderColor: isScrolled ? "rgba(76, 49, 245, 0.2)" : "#4C31F500",
          }}
        >
          <div className="px-6 flex items-center justify-center">
            <div className="flex items-center space-x-8 font-family-paragraph">
              <Link to="about" smooth={true}>
                <a className="text-gray-700 cursor-pointer dark:text-gray-200 transition-all duration-300 font-medium hover:scale-110 animate-[fadeIn_0.8s_ease-out_0.1s_both]">
                  About
                </a>
              </Link>

              <Link to="project" smooth={true}>
                <a className="text-gray-700 cursor-pointer dark:text-gray-200 transition-all duration-300 font-medium hover:scale-110 animate-[fadeIn_0.8s_ease-out_0.2s_both]">
                  Projects
                </a>
              </Link>

              <Link to="contact" smooth={true}>
                <a className="text-gray-700 cursor-pointer dark:text-gray-200 transition-all duration-300 font-medium hover:scale-110 animate-[fadeIn_0.8s_ease-out_0.3s_both]">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
