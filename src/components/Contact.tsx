import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "Email",
    icon: Mail,
    link: "mailto:odetokuntreasure6@gmail.com",
    color: "backdrop-blur-xl bg-white/70 dark:bg-gray-900/70",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/treasure-odetokun-107a21231/",
    color: "backdrop-blur-xl bg-white/70 dark:bg-gray-900/70",
  },
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/oluwatobicode/",
    color: "backdrop-blur-xl bg-white/70 dark:bg-gray-900/70",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://x.com/Oluwatobicodes",
    color: "backdrop-blur-xl bg-white/70 dark:bg-gray-900/70",
  },
];

const Contact = () => {
  return (
    <section className="px-5 py-20" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[2.5rem] lg:text-[4rem] font-normal text-white font-family-headings leading-tight pb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[1rem] lg:text-[1.25rem] font-light text-white opacity-70 font-family-paragraph pb-12 max-w-2xl"
          >
            Got a project idea? Let's bring it to life together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-row gap-6 flex-wrap justify-center"
          >
            {socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 lg:w-24 lg:h-24 rounded-full flex items-center justify-center ${social.color} transition-colors cursor-pointer`}
                >
                  <Icon className="text-white" size={30} />
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
