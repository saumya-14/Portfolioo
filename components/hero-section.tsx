"use client";

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InteractiveSphereCanvas } from '@/components/interactive-sphere';
import { FloatingShapes } from '@/components/floating-shapes';

export function HeroSection() {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Floating Shapes */}
      <FloatingShapes />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.p 
              className="text-primary font-medium tracking-wider uppercase text-sm"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              Saumya
              <br />
              <span className="animated-gradient">Shrivastava</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground font-light"
              variants={itemVariants}
            >
              Full Stack Developer & Creative Technologist
            </motion.p>
          </motion.div>

          <motion.p 
            className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            variants={itemVariants}
          >
            I craft exceptional digital experiences through innovative code, 
            turning complex problems into elegant solutions that push the boundaries 
            of what's possible on the web.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="group relative overflow-hidden"
              data-cursor="hover"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              data-cursor="hover"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div 
            className="flex items-center space-x-6 pt-8"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: "https://github.com/saumya-14", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/saumya-sh/", label: "LinkedIn" },
              { icon: Mail, href: "Saumya140904@gmail.com", label: "Email" }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-cursor="hover"
              >
                <social.icon className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Interactive Sphere */}
        <motion.div
          className="h-96 lg:h-[500px] relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <InteractiveSphereCanvas />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2 text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}