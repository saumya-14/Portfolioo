"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "HelperAi",
    description: "HelperAI is an intelligent multilingual assistant that analyzes videos, images, and text to provide AI-powered responses, automatically translating them into your preferred language with audio playback capabilities.",
    image: "/helperai.png",
    technologies: ["Next.js", "TypeScript", "Uploadthing", "Murf ai","Gemini","Mongodb", "Tailwind CSS","Clerk","Uploadthing"],
    category: "GenAi",
    github: "https://github.com/saumya-14/HelperAi",
    live: "https://helper-ai-nine.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Utsav",
    description: "Utsav is an event management platform built with Next.js and secured with Clerk authentication. It enables users to create events, sell tickets seamlessly, and allows attendees to purchase tickets easily, simplifying event hosting and ticketing for everyone.",
    image: "/Utsav.png",
    technologies: ["Next.js", "Node.js","Mongodb","Stripe","Clerk","Uploadthing"],
    category: "Full Stack",
    github: "https://github.com/saumya-14/Utsav",
    live: "https://utsav-opal.vercel.app/",
    featured: true
  },
  {
    id: 3,
    title: "CodeGrill",
    description: "Real-time interview platform with live recording and feedback system",
    image: "/codegrill.png",
    technologies: ["Nextjs", "Node.js", "Convex", "Clerk", "Stream"],
    category: "Full Stack",
    github: "https://github.com/saumya-14/CodeGrill",
    live: "https://code-grill-three.vercel.app/",
    featured: false
  },
  {
    id: 4,
    title: "Realtime-tracker",
    description: "This project is a real-time location tracking application built using Node.js, Express, Socket.io, and Leaflet.js. The application allows multiple users to share their geolocation data in real-time, displaying their locations on an interactive map.",
    image: "/helperai.png",
    technologies: ["Nodejs", "Express", "Websocket", "Leaflet.js"],
    category: "Frontend",
    github: "https://github.com/saumya-14/Realtime-tracker",
    live: "https://example.com",
    featured: false
  },
  {
    id: 5,
    title: "Admin Dashboard",
    description: "Frontend project for admin dashboard",
    image: "/admin.png",
    technologies: ["Reactjs","Materialui"],
    category: "Frontend",
    github: "https://github.com/saumya-14/AdminDashboard",
    live: "https://admin-dashboard-git-master-saumya14s-projects.vercel.app/",
    featured: false
  },

];

const categories = ["All", "Full Stack", "Frontend", "GenAi"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

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
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">My Work</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my expertise in full-stack development, 
              creative problem-solving, and attention to detail.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Work</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button size="sm" variant="secondary" data-cursor="hover">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button size="sm" variant="secondary" data-cursor="hover">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold">{project.title}</h4>
                        <Badge variant="outline">{project.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1" data-cursor="hover">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1" data-cursor="hover">
                          <Github className="w-4 h-4 mr-2" />
                          Source
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                  data-cursor="hover"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                        <Button size="sm" variant="secondary" data-cursor="hover">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" data-cursor="hover">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold">{project.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
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