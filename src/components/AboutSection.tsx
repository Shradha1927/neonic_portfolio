import { Code, Palette, Zap, Globe, Database, Cpu } from 'lucide-react';

const skills = [
  { name: 'HTML5', icon: Code, color: 'text-orange-500' },
  { name: 'CSS3', icon: Palette, color: 'text-blue-500' },
  { name: 'React', icon: Zap, color: 'text-cyan-500' },
  { name: 'GSAP', icon: Globe, color: 'text-green-500' },
  { name: 'Python', icon: Database, color: 'text-yellow-500' },
  { name: 'Node.js', icon: Cpu, color: 'text-emerald-500' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full overflow-hidden glass-card p-2 glow-primary group-hover:glow-secondary transition-all duration-500">
                <img 
                  src="/lovable-uploads/ee9e99dc-7e74-4004-b34c-ed464809bac4.png"
                  alt="Shradha Kapoor - Developer"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center float glow-primary">
                <Code className="h-8 w-8 text-background" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-gradient-secondary flex items-center justify-center float-delayed glow-secondary">
                <Zap className="h-6 w-6 text-background" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About{' '}
                <span className="gradient-text">Me</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a love for creating 
                  immersive digital experiences. My journey in tech started with 
                  curiosity and has evolved into expertise in modern web technologies.
                </p>
                
                <p>
                  With a strong foundation in React, GSAP animations, and 3D web 
                  technologies, I specialize in bringing creative visions to life 
                  through code. I believe in the power of clean, efficient code 
                  and stunning visual design.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className="glass-card p-4 rounded-lg hover:glow-primary transition-all duration-300 group cursor-pointer"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`h-6 w-6 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;