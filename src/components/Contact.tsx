import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "Email",
    icon: Mail,
    link: "mailto:odetokuntreasure6@gmail.com",
    hoverColor: "hover:bg-[#EA4335]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/treasure-odetokun-107a21231/",
    hoverColor: "hover:bg-[#0077B5]",
  },
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/oluwatobicode/",
    hoverColor: "hover:bg-[#333]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://x.com/Oluwatobicodes",
    hoverColor: "hover:bg-[#1DA1F2]",
  },
];

const Contact = () => {
  return (
    <section className="px-5 py-20 mb-10" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[2.5rem] lg:text-[4rem] font-bold text-white font-family-headings leading-tight pb-4"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[1rem] lg:text-[1.25rem] font-light text-white/70 font-family-paragraph pb-12 max-w-2xl"
          >
            Got a project idea or just want to say hi? <br />
            My inbox is always open.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-row gap-6 flex-wrap justify-center mb-16"
          >
            {socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg group ${social.hoverColor}`}
                >
                  <Icon
                    className="text-white/80 group-hover:text-white transition-colors"
                    size={30}
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
