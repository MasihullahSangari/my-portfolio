const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-primary mb-4" data-num="05.">
          05. What's Next?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-lightest mb-6">
          Get In Touch
        </h2>
        <p className="paragraph mb-12">
          I'm currently looking for internship and junior developer opportunities. 
          Whether you have a question or just want to say hi, my inbox is always open. 
          I'll try my best to get back to you!
        </p>
        <a
          href="mailto:omersagar469@gmail.com"
          className="inline-block px-8 py-4 border border-primary text-primary font-mono text-lg rounded hover:bg-green-tint transition-colors"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
