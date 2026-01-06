const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24">
      <div className="max-w-4xl">
        <p className="font-mono text-primary mb-5 fade-up fade-up-delay-1">
          Hi, my name is
        </p>
        <h1 className="big-heading mb-3 fade-up fade-up-delay-2">
          Omer Ahmadzai.
        </h1>
        <h2 className="medium-heading text-slate mb-6 fade-up fade-up-delay-3">
          I build scalable web applications.
        </h2>
        <p className="paragraph max-w-xl mb-12 fade-up fade-up-delay-4">
          I'm a Full Stack Web Developer and Computer Science undergraduate with 2+ years of experience 
          building responsive, secure, and scalable web applications using modern web technologies. 
          I focus on creating accessible, human-centered digital experiences.
        </p>
        <div className="fade-up fade-up-delay-5">
          <a
            href="/resume.pdf"
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
