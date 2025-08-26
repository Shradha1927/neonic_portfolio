import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-foreground' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-cyan-400' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-secondary/10 blur-3xl float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with 
                amazing people. Whether you have a project in mind or just want 
                to say hello, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center glow-primary group-hover:glow-secondary transition-all duration-300">
                  <Mail className="h-6 w-6 text-background" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">kshradha341@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center glow-primary group-hover:glow-secondary transition-all duration-300">
                  <MapPin className="h-6 w-6 text-background" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">New Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-foreground font-medium mb-4">Follow Me</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:glow-primary transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className={`h-6 w-6 ${social.color} transition-colors`} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="glass-card border-primary/20 focus:border-primary focus:glow-primary transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="glass-card border-primary/20 focus:border-primary focus:glow-primary transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="glass-card border-primary/20 focus:border-primary focus:glow-primary transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:glow-primary transition-all duration-300 pulse-glow"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;