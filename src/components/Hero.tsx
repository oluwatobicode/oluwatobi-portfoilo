import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-5">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col text-center items-center justify-center space-y-6">
          <motion.img
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/circular-coding-ninja-icon.svg"
            className="w-[100px] lg:w-[120px]"
            alt="Coding Ninja Logo"
          />

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-family-headings font-bold text-white text-[40px] md:text-[60px] lg:text-[80px] leading-tight"
          >
            Hi, I am <span className="text-gray-400">Treasure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-family-paragraph text-gray-300 text-[16px] md:text-[20px] lg:text-[24px] lg:leading-[1.6] max-w-2xl"
          >
            Also{" "}
            <span className="text-white font-semibold">
              known as Coding Ninja
            </span>
            . A Full-Stack Software Engineer focused on building clean,
            efficient, and scalable web applications using React, Next.js,
            Express.js, Node.js, and TypeScript.
          </motion.p>

          <motion.a
            href="https://docs.google.com/document/d/1a1XMWmV5y6RQvAGtWcII-ZxBuon41mlhRyEXQj0Tcis/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center w-[160px] h-[55px] bg-white text-black font-family-headings font-medium text-[18px] lg:text-[20px] rounded-[15px] cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
          >
            My Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
