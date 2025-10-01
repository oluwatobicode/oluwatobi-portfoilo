import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col text-center items-center justify-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-family-headings lg:text-[80px] text-[20px] text-white"
          >
            Hi, I am Treasure 🥷🏾
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-family-paragraph  text-white lg:text-[24px] text-[14px]  lg:leading-[39px]"
          >
            I am a front-end engineer who builds functional and efficient web
            applications using React, Next.js, and TypeScript, focusing on clean
            code and practical solutions.
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
              href="https://docs.google.com/document/d/1a1XMWmV5y6RQvAGtWcII-ZxBuon41mlhRyEXQj0Tcis/edit?usp=sharing"
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
