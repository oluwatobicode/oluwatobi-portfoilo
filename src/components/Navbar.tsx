import { useState } from "react";
import { Link } from "react-scroll";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed top-5 left-1/2 z-50 w-[90%] max-w-[400px]"
    >
      <div
        className={`rounded-full px-6 py-4 flex items-center justify-center transition-all duration-500 border ${
          isScrolled
            ? "bg-white/10 backdrop-blur-md border-white/20 shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center space-x-8 font-family-paragraph">
          {["About", "Project", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              className="relative cursor-pointer text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium group"
            >
              {item}

              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
