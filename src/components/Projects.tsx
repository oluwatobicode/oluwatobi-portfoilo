import { Github, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

const myProjects = [
  {
    pic: "/nacos-website.png",
    name: "BOWEN NACOS",
    desc: "Spearheaded the front-end development and documentation for Bowen NACOS Website at Bowen University using React.js, Context API, and Tailwind CSS, streamlining resource sharing access for 1,000+ students and boosting engagement by 20%.",
    tools: [
      { name: "/React-icon.svg" },
      { name: "/ts-logo.png" },
      { name: "/Tailwind-CSS.svg" },
      { name: "/Vite_icon.svg" },
    ],
    link: "https://nacosbowen.org.ng/",
    isPersonal: false,
  },
  {
    pic: "/Connect-four-game.svg",
    name: "Connect Four Game",
    desc: "A strategy-based Connect Four game built with React and TypeScript, featuring an AI opponent powered by the Minimax algorithm with alpha-beta pruning for optimized gameplay decisions.",
    tools: [
      { name: "/React-icon.svg" },
      { name: "/ts-logo.png" },
      { name: "/Tailwind-CSS.svg" },
      { name: "/Vite_icon.svg" },
    ],
    link: "https://connect-four-gane.vercel.app/",
    github: "https://github.com/oluwatobicode/connect-four-gane",
    isPersonal: true,
  },
  {
    pic: "/Hangman-game.svg",
    name: "Online Hangman Game",
    desc: "A modern AI-powered word-guessing game with a full backend and dynamic gameplay. Features multiple categories, AI-generated words, achievements, leaderboard, and customizable difficulty. Built with React and TypeScript, enriched with Framer Motion animations for a smooth, engaging player experience.",
    tools: [
      { name: "/React-icon.svg" },
      { name: "/ts-logo.png" },
      { name: "/MongoDB.svg" },
      { name: "/Express.png" },
      { name: "/Node.js.svg" },
      { name: "/Tailwind-CSS.svg" },
      { name: "/Vite_icon.svg" },
      { name: "/framer-white.svg" },
    ],
    link: "https://hangman-game-eight-steel.vercel.app/",
    github: "https://github.com/oluwatobicode/hangman_game",
    isPersonal: true,
  },
  {
    pic: "/ark-pay.svg",
    name: "ArkPay",
    desc: "An admin dashboard for ArkPay, a service that enables e-commerce websites to integrate cryptocurrency payments seamlessly. The platform converts crypto transactions into fiat and settles directly into merchants' bank accounts, offering secure, real-time tracking and a user-friendly interface for administrators.",
    tools: [
      { name: "/React-icon.svg" },
      { name: "/ts-logo.png" },
      { name: "/Tailwind-CSS.svg" },
    ],
    link: "https://ark-pay.vercel.app/",
    github: "https://github.com/oluwatobicode/ark-pay",
    isPersonal: true,
  },
  {
    pic: "/apollo-chatbot.svg",
    name: "Apollo Chatbot",
    desc: "An AI-powered chatbot integrated into a student platform, designed to assist with academic inquiries and provide study support through natural, interactive conversations.",
    tools: [
      { name: "/React-icon.svg" },
      { name: "/ts-logo.png" },
      { name: "/Redux.svg" },
      { name: "/supabase-logo-icon.png" },
      { name: "/Tailwind-CSS.svg" },
    ],
    link: "https://apollo-chat-bot-brown.vercel.app/",
    github: "https://github.com/oluwatobicode/apollo-chatBot",
    isPersonal: true,
  },
];

const Projects = () => {
  return (
    <section className="px-5 py-10" id="project">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-3 lg:text-[3rem]/[3.36rem] font-normal text-[2rem] text-white font-family-headings"
        >
          Selected Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="pb-10 text-[0.875rem] lg:text-[1rem] font-light text-white font-family-headings"
        >
          A few selected projects I've had worked on
        </motion.p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[25px]">
          {myProjects.map((el, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="w-full h-full p-6 rounded-[20px] flex flex-col gap-[20px] text-white bg-[#0E0E0E]"
            >
              <h1 className="font-family-headings pb-5 font-normal text-[18px] lg:text-[22px] leading-[100%]">
                {el.name}
              </h1>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img className="rounded-[20px]" src={el.pic} alt={el.name} />
              </motion.div>

              <p className="font-family-paragraph font-light opacity-50 text-[14px] lg:text-[16px]">
                {el.desc}
              </p>

              <div className="flex flex-row items-center gap-[20px] mt-auto">
                {el.tools.map((el, i) => (
                  <div key={i}>
                    <img className="w-[30px]" src={el.name} alt="" />
                  </div>
                ))}
              </div>

              <div className="flex flex-row gap-[20px] mt-auto">
                <motion.a
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-[10px] cursor-pointer bg-white text-black w-[130px] h-[50px] rounded-[18px] font-family-paragraph hover:bg-gray-100 transition-colors"
                >
                  Live Link
                  <motion.div
                    whileHover={{ x: 2, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MoveUpRight size={20} />
                  </motion.div>
                </motion.a>

                {el.isPersonal && (
                  <motion.a
                    href={el.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-[10px] border cursor-pointer border-white w-[130px] h-[50px] rounded-[18px] font-family-paragraph hover:bg-white hover:text-black transition-colors"
                  >
                    Github
                    <Github size={20} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
