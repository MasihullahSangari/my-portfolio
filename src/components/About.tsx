const technologies = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'MySQL',
  'Laravel',
  'Git & GitHub',
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading" data-num="01.">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Text content */}
          <div className="md:col-span-2 space-y-4">
            <p className="paragraph">
              Hello! My name is Omer and I enjoy building things that live on the internet. 
              My interest in web development started during my early studies and grew rapidly 
              as I began building real-world projects using modern frontend and backend technologies.
            </p>
            <p className="paragraph">
              Fast-forward to today, I've had the opportunity to work on large-scale educational 
              platforms, content-driven web applications, and library management systems, 
              collaborating with teams and using Git-based workflows.
            </p>
            <p className="paragraph">
              My main focus these days is building secure, scalable, and user-friendly full-stack 
              applications using{' '}
              <span className="text-primary">React</span>,{' '}
              <span className="text-primary">Node.js</span>, and modern UI frameworks.
            </p>

            <p className="paragraph mt-6">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="font-mono text-sm text-slate-light flex items-center gap-2"
                >
                  <span className="text-primary">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="relative z-10 rounded overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
                alt="Omer Ahmadzai"
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded z-0 group-hover:top-3 group-hover:left-3 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
