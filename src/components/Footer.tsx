const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-5 py-8 border-t border-white/10 bg-[#0E0E0E]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
        <p className="text-white/50 font-family-paragraph text-sm font-light">
          © {currentYear} Treasure Odetokun. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
