const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Bootstrap'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Laravel', 'Python', 'MySQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Figma', 'REST APIs', 'Database Management'],
  },
  {
    title: 'Soft Skills',
    skills: ['Problem-solving', 'Team collaboration', 'Communication', 'Continuous learning'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading" data-num="04.">
          Skills & Technologies
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-navy-light p-6 rounded-lg card-hover"
            >
              <h3 className="text-lg font-semibold text-primary mb-4 font-mono">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
