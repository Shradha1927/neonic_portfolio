import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Modern shopping experience with 3D product previews and smooth animations',
    image: '/lovable-uploads/45fd757e-c595-4e87-b503-943d8961f110.png',
    technologies: ['React', 'Three.js', 'GSAP', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'Travel Booking App',
    description: 'Interactive travel platform with immersive destination exploration',
    image: '/lovable-uploads/4b904743-46f0-4c10-9dae-d20da90f712d.png',
    technologies: ['Next.js', 'Framer Motion', 'Mapbox'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with animated backgrounds and forecasts',
    image: '/lovable-uploads/f32b5bd9-cb9a-4b79-ab05-75b48ec0dfbc.png',
    technologies: ['React', 'Chart.js', 'Weather API'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'Phone Case Designer',
    description: 'Custom phone case design tool with real-time 3D preview',
    image: '/lovable-uploads/cc01ba4f-1f4f-43bc-8781-0f898adca3bc.png',
    technologies: ['Vue.js', 'Three.js', 'Canvas API'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'Farmer Marketplace',
    description: 'Direct-to-consumer platform connecting farmers with buyers',
    image: '/lovable-uploads/1ec39cc8-045c-4784-b600-b41daf3897fe.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'Desktop Assistant',
    description: 'AI-powered desktop assistant with voice commands and automation',
    image: '/lovable-uploads/7589c917-4793-49c9-a240-00569d8a88ab.png',
    technologies: ['Electron', 'Python', 'TensorFlow'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'Ticket Validation System',
    description: 'QR-based ticket validation system for events and transportation',
    image: '/lovable-uploads/de184022-8f77-4cf9-8037-5933e295e401.png',
    technologies: ['React Native', 'QR Scanner', 'Firebase'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'Shopping Landing Page',
    description: 'Minimalist e-commerce landing page with smooth interactions',
    image: '/lovable-uploads/9290dc8e-3a80-4f1b-8801-36ee99af91b7.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in web development, from interactive experiences to practical applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group relative overflow-hidden rounded-xl glass-card hover:glow-primary transition-all duration-500 ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="glass-card">
                    <Eye className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="glass-card border-primary/30">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-primary text-background text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-muted/20 text-foreground rounded border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="glass-card border-primary/30 hover:glow-primary transition-all duration-300 px-8 py-6"
            onClick={() => window.open('https://github.com/Shradha1927', '_blank')}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;