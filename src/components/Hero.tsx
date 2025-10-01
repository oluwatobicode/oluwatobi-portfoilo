const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col text-center items-center justify-center space-y-4">
          <h1 className="font-family-headings lg:text-[80px] text-[20px] text-white">
            Hi, I am Treasure 🥷🏾
          </h1>
          <p className="font-family-paragraph  text-white lg:text-[24px] text-[14px]  lg:leading-[39px]">
            I am a front-end engineer who builds functional and efficient web
            applications using React, Next.js, and TypeScript, focusing on clean
            code and practical solutions.
          </p>

          <button className="w-[150px] bg-white  h-[50px] rounded-[15px] cursor-pointer ">
            <a
              href="https://docs.google.com/document/d/1a1XMWmV5y6RQvAGtWcII-ZxBuon41mlhRyEXQj0Tcis/edit?usp=sharing"
              target="blank"
              className="text-black font-family-headings font-medium text-[20px]"
            >
              My Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
