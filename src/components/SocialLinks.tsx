import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Omersagar',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/omer-sagar-380656338',
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:omersagar469@gmail.com',
    icon: Mail,
  },
];

const SocialLinks = () => {
  return (
    <>
      {/* Left side - Social Icons */}
      <div className="fixed left-6 lg:left-12 bottom-0 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-slate-light hover:text-primary hover:-translate-y-1 transition-all duration-300"
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>

      {/* Right side - Email */}
      <div className="fixed right-6 lg:right-12 bottom-0 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate">
        <a
          href="mailto:omersagar469@gmail.com"
          className="font-mono text-xs text-slate-light hover:text-primary hover:-translate-y-1 transition-all duration-300 tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          omersagar469@gmail.com
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
