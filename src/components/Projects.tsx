import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import latton1 from '@/assets/latton-1.png';
import latton2 from '@/assets/latton-2.png';
import latton3 from '@/assets/latton-3.png';
import latton4 from '@/assets/latton-4.png';

const projectImages = [latton1, latton2, latton3, latton4];

const projects = [
  {
    title: 'Latton - Business Directory',
    description:
      'A comprehensive business directory platform helping users discover restaurants, schools, hospitals, and services across 200+ cities. Features advanced search, category filtering, and user reviews with 50K+ business listings.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://connect-countrywide-guide.lovable.app',
    featured: true,
  },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading" data-num="04.">
          Some Things I've Built
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? 'md:text-left' : ''
              }`}
            >
              {/* Project Image Carousel */}
              <div
                className={`md:col-span-7 relative group ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10 rounded" />
                  <div className="relative overflow-hidden rounded">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {projectImages.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          className="w-full h-[280px] object-cover object-top flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      ))}
                    </div>
                  </div>
                </a>
                
                {/* Carousel Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {projectImages.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => setCurrentSlide(dotIndex)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === dotIndex 
                          ? 'bg-primary scale-110' 
                          : 'bg-slate hover:bg-slate-light'
                      }`}
                      aria-label={`Go to slide ${dotIndex + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-5 ${
                  index % 2 === 1 ? 'md:order-1 md:text-left' : 'md:text-right'
                }`}
              >
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-lightest mb-4">
                  {project.title}
                </h3>
                <div className="bg-navy-light p-6 rounded shadow-xl mb-4 relative z-20">
                  <p className="text-slate-light text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 font-mono text-sm text-slate mb-4 ${
                    index % 2 === 1 ? '' : 'md:justify-end'
                  }`}
                >
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? '' : 'md:justify-end'
                  }`}
                >
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-lightest hover:text-primary transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
