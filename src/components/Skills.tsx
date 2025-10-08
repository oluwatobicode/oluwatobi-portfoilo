import { motion } from "framer-motion";

const allSkills = [
  {
    name: "Javascript",
    skill: "/js-logo.png",
  },
  {
    name: "TypeScript",
    skill: "/ts-logo.png",
  },
  {
    name: "Tailwind CSS",
    skill: "/Tailwind-CSS.svg",
  },
  { name: "React", skill: "/React-icon.svg" },
  {
    name: "Next Js",
    skill: "/next-js.svg",
  },
  {
    name: "Express Js",
    skill: "/Express.png",
  },
  {
    name: "Node Js",
    skill: "/Node.js.svg",
  },
  {
    name: "MongoDB",
    skill: "/MongoDB.svg",
  },
  {
    name: "React Query",
    skill: "/React-Query-Icon.svg",
  },
  {
    name: "Vite",
    skill: "/Vite_icon.svg",
  },
  {
    name: "Supabase",
    skill: "/supabase-logo-icon.png",
  },

  {
    name: "Redux",
    skill: "/Redux.svg",
  },
  {
    name: "Framer Motion",
    skill: "/framer-white.svg",
  },
];

const Skills = () => {
  return (
    <section className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pb-10 lg:text-[3rem]/[3.36rem] text-[2rem] font-normal text-white font-family-headings"
        >
          My Tech Stack
        </motion.h1>

        <div className="grid lg:grid-cols-10 grid-cols-3 gap-[25px]">
          {allSkills.map((el, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="lg:w-full w-[90px] bg-[#0E0E0E] cursor-pointer h-[90px] rounded-[12px] flex items-center justify-center"
            >
              <img
                className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] cursor-pointer"
                src={el.skill}
                alt={el.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
