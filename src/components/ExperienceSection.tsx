import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    company: 'Trackila',
    role: 'Python Developer',
    duration: 'August 2025 - Present',
    location: 'Remote',
    description: 'Managed dashboard development and implementation. Built Python-based solutions for data management and visualization.',
    technologies: ['Python', 'Dashboard', 'Data Management'],
    logo: '🐍'
  },
  {
    company: 'Bluestock.in',
    role: 'SDE Intern',
    duration: 'April 2024 - May 2024',
    location: 'Remote',
    description: 'Developed responsive web applications using React and Node.js. Implemented real-time features and optimized performance.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    logo: '🚀'
  },
  {
    company: 'Events INFO',
    role: 'Web Developer',
    duration: '2022 - 2023',
    location: 'Remote',
    description: 'Built event management platforms with dynamic content and interactive user interfaces. Integrated payment gateways.',
    technologies: ['JavaScript', 'HTML/CSS', 'PHP', 'MySQL'],
    logo: '🎯'
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-primary/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work{' '}
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey through innovative companies and impactful projects
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full hidden md:block"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-primary glow-primary z-10"></div>

                {/* Card */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="glass-card p-6 rounded-xl hover:glow-primary transition-all duration-300 group">
                    {/* Company Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-2xl">
                          {exp.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                          <p className="text-primary font-medium">{exp.role}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Duration & Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-secondary hover:glow-secondary transition-all duration-300 px-8 py-6"
            onClick={() => window.open('https://drive.google.com/file/d/1K1RNZP0_UvSrJoDj7poSfYuxidLqDxSF/view?usp=sharing', '_blank')}
          >
            View Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;