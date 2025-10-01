const About = () => {
  return (
    <div className="min-h-screen px-8 py-4 lg:flex lg:items-center lg:justify-center">
      <div className="mx-auto max-w-6xl">
        <div className="flex lg:flex-row flex-col-reverse items-center justify-center gap-[10px] lg:gap-[91px]">
          <div className="flex-1 bg-[#0E0E0E] w-full p-4 h-[300px] rounded-[12px]">
            <h1 className="text-[#1c48c2] tracking-wide mb-3 font-family-headings text-[14px] lg:text-[26px]">
              ODETOKUN TREASURE OLUWATOBI 👋🏽
            </h1>
            <p className="lg:text-[20px] font-normal font-family-paragraph text-[14px] text-[#B8B8B8] lg:leading-[30px]">
              I have been always attracted to solving and providing solutions to
              complex problems. I have worked on various projects ranging in
              magnitude from small to big. I can (and have) work with cross
              functional teams- teams consisting of designers, engineers and
              product managers. I also thrive in a fast-paced, mentally
              stimulating enviroments. If I'm not coding, I will probably be
              binge-watching anime or trying to beat a final boss in a game.
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <img
              src="/Ellipse.svg"
              alt=""
              className="lg:w-full lg:h-auto w-[280px] h-[290px]"
            />
            <img
              src="/circular-coding-ninja-icon.svg"
              alt="Coding-ninja-icon"
              className="absolute w-[250px] h-[250px] lg:w-[330px] lg:h-[330px] top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
