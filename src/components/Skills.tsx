import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  skill: string;
}

const allSkills: SkillItem[] = [
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
  {
    name: "React",
    skill: "/React-icon.svg",
  },
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
          className="pb-10 lg:text-[3rem]/[3.36rem] text-[2rem] font-normal text-white font-family-headings text-center lg:text-left"
        >
          My Tech Stack
        </motion.h1>

        <div className="flex flex-wrap justify-center lg:justify-start gap-[25px]">
          {allSkills.map((el, i) => (
            <SkillCard key={i} el={el} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  el: SkillItem;
  index: number;
}

const SkillCard = ({ el, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <div className="lg:w-[100px] lg:h-[100px] w-[90px] h-[90px] bg-[#0E0E0E] border border-white/5 hover:border-white/20 transition-colors cursor-pointer rounded-[12px] flex items-center justify-center shadow-lg">
        <img
          className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] object-contain"
          src={el.skill}
          alt={el.name}
        />
      </div>

      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
        {el.name}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
      </div>
    </motion.div>
  );
};

export default Skills;
