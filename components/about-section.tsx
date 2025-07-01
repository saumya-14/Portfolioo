"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time"
  },
  {
    icon: Palette,
    title: "Design Thinking",
    description: "Bridging the gap between beautiful design and functional implementation"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed, accessibility, and exceptional user experience"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to deliver impactful solutions"
  }
];

const stats = [
  { number: "4", label: "Months Experience" },
  { number: "40+", label: "Repos" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "24/7", label: "Available Support" }
];

export function AboutSection() {
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
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">About Me</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate About <span className="text-gradient">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             As a full-stack developer with a strong foundation in both frontend and backend technologies, I specialize in building dynamic web applications that are both visually engaging and highly functional. My experience spans real-world projects, competitive programming, and tech stacks like Next.js, Node.js, and MongoDB — blending creativity with performance to deliver impactful digital solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold mb-6">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
  My journey into tech began with an insatiable curiosity and a desire to understand how things work. What started with basic HTML and CSS experiments quickly evolved into late nights of self-learning and building small passion projects. Over time, this hobby turned into a full-blown pursuit of mastering full-stack development and solving real-world problems through code.
</p>

<p>
  Today, as a full-stack developer and engineering student at IIIT Ranchi, I specialize in crafting scalable web applications using cutting-edge technologies like React, Next.js, TypeScript, Node.js, and MongoDB. I strongly believe in writing clean, maintainable code and designing user-first interfaces that deliver seamless experiences. My work reflects a balance between performance, aesthetics, and functionality — shaped by both academic learning and hands-on project experience.
</p>

<p>
  When I'm not coding, you'll likely find me diving into competitive programming challenges, contributing to open-source initiatives, or collaborating on innovative side projects. I’m also passionate about sharing knowledge and frequently mentor juniors and fellow developers — because I believe learning grows stronger when it's shared.
</p>

              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-12">What Drives Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}