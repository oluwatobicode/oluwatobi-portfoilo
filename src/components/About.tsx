import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="min-h-screen px-8 py-4 flex items-center justify-center"
      id="about"
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="flex lg:flex-row flex-col-reverse items-center justify-center gap-[10px] lg:gap-[91px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 bg-[#0E0E0E] w-full p-4 lg:p-8 min-h-[300px] rounded-[12px]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white tracking-wide mb-3 font-family-headings text-[14px] lg:text-[26px]"
            >
              ODETOKUN TREASURE OLUWATOBI 👋🏽
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:text-[20px] font-normal font-family-paragraph text-[14px] text-[#B8B8B8] lg:leading-[30px]"
            >
              I have been always attracted to solving and providing solutions to
              complex problems. I have worked on various projects ranging in
              magnitude from small to big. I can (and have) work with cross
              functional teams- teams consisting of designers, engineers and
              product managers. I also thrive in a fast-paced, mentally
              stimulating enviroments. If I'm not coding, I will probably be
              binge-watching anime or just playing games. You could also call me
              Coding Ninja.
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
              className="lg:w-full lg:h-auto w-[280px] h-[290px]"
            />
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              src="/oluwatobi.jpg"
              alt="Coding-ninja-icon"
              className="absolute w-[250px] h-[250px] lg:w-[330px] lg:h-[330px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
