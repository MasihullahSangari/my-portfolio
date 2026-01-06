import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-heading" data-num="03.">
          Education
        </h2>

        <div className="bg-navy-light p-8 rounded-lg card-hover">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-tint rounded-lg">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-lightest mb-1">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-primary font-medium mb-2">
                Rana University, Kabul
              </p>
              <div className="flex flex-wrap gap-4 text-slate font-mono text-sm">
                <span>2022 – Present</span>
                <span className="text-primary">|</span>
                <span>GPA: 3.6 / 4.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
