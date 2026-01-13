import { ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  // Auto-scroll carousel every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % projectImages.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length);
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
    }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading" data-num="04.">
          Some Things I've Built
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? 'md:text-left' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Project Image Carousel */}
              <motion.div
                className={`md:col-span-7 relative group ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <motion.div 
                    className="absolute inset-0 bg-primary/20 z-10 rounded"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative overflow-hidden rounded shadow-lg hover:shadow-2xl transition-shadow duration-300">
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
              </motion.div>

              {/* Project Content */}
              <motion.div
                className={`md:col-span-5 ${
                  index % 2 === 1 ? 'md:order-1 md:text-left' : 'md:text-right'
                }`}
                whileHover={{ x: index % 2 === 1 ? -5 : 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <motion.h3 
                  className="text-2xl font-bold text-slate-lightest mb-4"
                  whileHover={{ color: 'hsl(var(--primary))' }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.div 
                  className="bg-navy-light p-6 rounded shadow-xl mb-4 relative z-20"
                  whileHover={{ 
                    boxShadow: '0 20px 40px -15px rgba(100, 255, 218, 0.15)',
                    y: -2
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-slate-light text-sm leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
                <ul
                  className={`flex flex-wrap gap-3 font-mono text-sm text-slate mb-4 ${
                    index % 2 === 1 ? '' : 'md:justify-end'
                  }`}
                >
                  {project.tech.map((t, techIndex) => (
                    <motion.li 
                      key={t}
                      whileHover={{ color: 'hsl(var(--primary))', y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t}
                    </motion.li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? '' : 'md:justify-end'
                  }`}
                >
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-lightest hover:text-primary transition-colors"
                      aria-label="View live site"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
