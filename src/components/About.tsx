import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="px-5 py-20" id="about">
      <div className="mx-auto max-w-6xl w-full">
        <div className="flex lg:flex-row flex-col-reverse items-center justify-center gap-[40px] lg:gap-[90px]">
          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 bg-[#0E0E0E] w-full p-6 lg:p-10 min-h-[300px] rounded-[20px] border border-white/5"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white tracking-wide mb-5 font-family-headings text-[16px] lg:text-[24px] font-bold"
            >
              TREASURE ODETOKUN OLUWATOBI 👋🏽
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-normal font-family-paragraph text-[14px] lg:text-[18px] text-[#B8B8B8] leading-[1.6] lg:leading-[1.8]"
            >
              I have always been drawn to solving complex problems through code.
              From building small utilities to deploying large-scale SaaS
              applications like
              <span className="text-white font-medium"> Orbit Flashcards</span>,
              I obsess over details and performance.
              <br />
              <br />
              I thrive in fast-paced, mentally stimulating environments and love
              collaborating with cross-functional teams. When I'm not shipping
              code or grinding System Design, you’ll find me binge-watching
              anime or gaming.
              <br />
              <br />
              They call me the{" "}
              <span className="text-white font-medium">Coding Ninja</span>.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <motion.img
              src="/Ellipse.svg"
              alt=""
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="lg:w-[450px] lg:h-auto w-[280px] h-[290px] opacity-60"
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src="/oluwatobi.jpg"
                alt="Treasure Odetokun"
                className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full object-cover border-4 border-[#0E0E0E] shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
