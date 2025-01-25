const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I am a passionate software engineering student at Sri Lanka Institute of Information Technology
        with a strong foundation in programming language and web technologies. I have hands-on
        experience in developing innovative solutions through various academic projects. As an intern, I am
        eager to contribute to a dynamic team, learn from real-world challenges, and grow my skills in
        artificial intelligence, mobile app development, and backend systems.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <a
          href="My_CV.pdf"
          download="My_CV.pdf"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          Download My CV
        </a>
      </button>
    </div>
  );
};

export default AboutMeText;
