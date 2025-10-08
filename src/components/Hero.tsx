import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col text-center items-center justify-center space-y-4">
          <motion.img
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/circular-coding-ninja-icon.svg"
            className="w-[80px]"
            alt=""
          />
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-family-headings lg:text-[80px] text-[20px] text-white"
          >
            Hi, I am Treasure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-family-paragraph  text-white lg:text-[24px] text-[14px]  lg:leading-[39px]"
          >
            Also know as Coding Ninja, a Full-Stack Software Engineer focused on
            building clean, efficient, and scalable web applications using
            React, Next.js, Express.js, Node.js, and TypeScript.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[150px] bg-white  h-[50px] rounded-[15px] cursor-pointer "
          >
            <a
              href="https://drive.google.com/file/d/1ipxcabwSbVYCZgo9pgEmL4oyMb5eXbfZ/view?usp=sharing"
              target="blank"
              className="text-black font-family-headings font-medium text-[20px]"
            >
              My Resume
            </a>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
