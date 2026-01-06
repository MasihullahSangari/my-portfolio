import { useState } from 'react';

const experiences = [
  {
    company: 'Univ SaaS',
    title: 'Full Stack Web Developer',
    location: 'Kabul, Afghanistan',
    date: '06/2025 – Present',
    points: [
      'Built a full-stack portal serving 50,000+ students across 40+ universities',
      'Developed features for results, study materials, attendance, and news',
      'Implemented multi-level admin system with role-based access',
      'Built REST APIs using Node.js & Express',
      'Designed responsive UI using Tailwind CSS & shadcn/ui',
    ],
  },
  {
    company: 'Kalaam',
    title: 'Full Stack Web Developer',
    location: 'Kabul, Afghanistan',
    date: '05/2024 – 04/2025',
    points: [
      'Built a full-stack app with 100+ book & magazine summaries',
      'Implemented authentication and advanced search',
      'Integrated audio playback features',
      'Optimized UI for mobile devices',
      'Collaborated using Git and pull requests',
    ],
  },
  {
    company: 'Bawar',
    title: 'Full Stack Web Developer',
    location: 'Kabul, Afghanistan',
    date: '11/2022 – 03/2023',
    points: [
      'Developed a library website using HTML, CSS, JavaScript, Tailwind',
      'Built backend using Laravel (auth, CMS, DB queries)',
      'Implemented responsive layouts and dynamic book listings',
      'Followed Git best practices and clean commits',
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-heading" data-num="02.">
          Where I've Worked
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Tab buttons */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l-2 border-navy-lighter">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`tab-button whitespace-nowrap ${
                  activeTab === index ? 'active' : ''
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 pt-2 md:pt-0 md:pl-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`${activeTab === index ? 'block' : 'hidden'}`}
              >
                <h3 className="text-xl font-medium text-slate-lightest mb-1">
                  {exp.title}{' '}
                  <span className="text-primary">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-sm text-slate mb-1">
                  {exp.date}
                </p>
                <p className="font-mono text-sm text-slate mb-4">
                  📍 {exp.location}
                </p>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-slate-light"
                    >
                      <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
