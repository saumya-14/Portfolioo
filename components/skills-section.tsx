"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FloatingShapes } from '@/components/floating-shapes';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Framer Motion", level: 85 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      
      { name: "MongoDB", level: 80 }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git/GitHub", level: 92 },
      { name: "Docker", level: 78 },
    
      { name: "Vercel", level: 90 }
    ]
  },
  {
    title: "Design & UX",
    skills: [
      { name: "Figma", level: 85 },
      { name: "UI/UX Design", level: 80 },
      { name: "Responsive Design", level: 95 },
      { name: "Accessibility", level: 88 }
    ]
  }
];

const technologies = [
   "DSA","C++","React", "Next.js", "TypeScript", "Node.js", "Python", ,
  "MongoDB", "Tailwind CSS", "Framer Motion", 
  "Vercel", "Git", "Figma", "REST APIs", 
];

export function SkillsSection() {
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      
      {/* Three.js Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <FloatingShapes />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Skills & Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="text-gradient">Proficiency</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit built through  hands-on experience 
              and continuous learning in modern web development.
            </p>
          </motion.div>

          {/* Skill Categories */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ x: categoryIndex % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: categoryIndex % 2 === 0 ? -50 : 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <Card className="h-full backdrop-blur-sm bg-card/80">
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: "100%" } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        >
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Tags */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors backdrop-blur-sm"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}