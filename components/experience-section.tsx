"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Bearconnect",
    location: "Remote",
    period: "March 2025 - Present",
    type: "Intern",
    description: [
      "Developing responsive UI components using modern frameworks like Nextjs and Tailwind CSS to enhance the user experience across devices.",
      "Collaborating with cross-functional teams to implement new features based on user feedback and analytics.",
      "Debugging and performance tuning for frontend and backend services, improving load times and stability.",
      "Version control and teamwork using Git, actively participating in code reviews and daily stand-ups."
    ],
    technologies: ["Nextjs", "Node.js", "Nestjs"]
  },
  {
    title: "Full Stack Developer",
    company: "Walmart Sparkathon(Hackathon) 2024",
    location: "Remote",
    period: "2024",
    type: "Hackathon",
    description: [
      "Built an intuitive user interface for product browsing and checkout.",
      "Integrated a backend system for product management and order tracking.",
      "Focused on enhancing customer experience with smooth navigation and responsive design.",
      "Ensured seamless communication between frontend and backend for dynamic product rendering."
    ],
    technologies: ["Nestjs", "Nodejs", "MongoDB", "Three.js"]
  },
  {
    title: "Full Stack Developer",
    company: "Google GenAI Hackathon 2024",
    location: "Remote",
    period: "2024",
    type: "Hackathon",
    description: [
      "Implemented GenAI for generating lectures, summaries, quizzes, and voiceovers.",
      "Built UI features for translating, editing, and previewing content in multiple formats.",
      "Integrated video and text generation APIs to allow teachers to create course materials from scratch or from videos.",
      "Helped streamline content-to-video conversion, making educational content creation faster and more accessible."
    ],
    technologies: ["Nextjs", "Mongodb", "Tailwindcss", "Genai"]
  },
 
];

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Experience</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A timeline of my career progression, highlighting key achievements 
              and the technologies I've mastered along the way.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-20 md:ml-0`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1">{experience.title}</CardTitle>
                          <div className="flex items-center text-primary font-medium mb-2">
                            <Building2 className="w-4 h-4 mr-2" />
                            {experience.company}
                          </div>
                        </div>
                        <Badge variant="secondary">{experience.type}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}