import TypeWriter from './TypeWriter';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24">
      <div className="max-w-4xl">
        <p className="font-mono text-primary mb-5 fade-up fade-up-delay-1">
          Hi, my name is
        </p>
        <h1 className="big-heading mb-3 fade-up fade-up-delay-2">
          <TypeWriter text="Masihullah Sangari." delay={0.3} />
        </h1>
        <h2 className="medium-heading text-slate mb-6 fade-up fade-up-delay-3">
          <TypeWriter text="I build scalable web applications." delay={1.3} />
        </h2>
        <p className="paragraph max-w-xl mb-12 fade-up fade-up-delay-4">
          I'm a Full Stack Web Developer with 1+ year of hands-on experience in designing, 
          developing, and deploying scalable and responsive web applications using modern 
          technologies. I focus on creating clean, maintainable, and high-performance code.
        </p>
        <div className="fade-up fade-up-delay-5">
          <a
             href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-4 border border-primary text-primary font-mono text-sm rounded hover:bg-green-tint transition-colors"
            >
              View My Resume
            </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
