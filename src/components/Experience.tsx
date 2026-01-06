import { useState } from 'react';

const experiences = [
  {
    company: 'Pana',
    title: 'Full Stack Developer',
    location: 'Kabul, Afghanistan',
    date: '2025 – Present',
    points: [
      'Currently developing a comprehensive school management dashboard for tracking and managing student and course data',
      'Building modules for attendance tracking, grade reports, and course management with real-time data updates',
      'Integrating data visualization and analytics tools to support administrative decision-making',
      'Leading the front-end architecture and contributing to database design and system optimization',
    ],
  },
  {
    company: 'Kalaam',
    title: 'Full Stack Web Developer',
    location: 'Kabul, Afghanistan',
    date: '2024 – 2025',
    points: [
      'Built a full-stack web app using React.js and Express.js, featuring 100+ book and magazine summaries',
      'Implemented user authentication and advanced search, increasing user engagement by 30%',
      'Designed and developed RESTful APIs for user interactions, content retrieval, and audio streaming',
      'Integrated audio playback functionality and optimized the UI for mobile responsiveness',
      'Used Git for version control and collaborated through branching and pull requests',
    ],
  },
  {
    company: 'TVETA',
    title: 'Web Development Intern',
    location: 'Kabul, Afghanistan',
    date: '2024 – 2025',
    points: [
      'Collaborated with a team of developers to design and develop modern, user-friendly web applications',
      'Gained hands-on experience in full-stack development, UI/UX design, and database management',
      'Assisted in maintaining and optimizing existing systems to improve performance and usability',
      'Worked with various web frameworks and libraries to implement responsive and efficient solutions',
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
