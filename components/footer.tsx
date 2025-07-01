"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Instagram } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Github, href: "https://github.com/saumya-14", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/saumya-sh/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/__saumya14__/", label: "Instagram" },
  { icon: Mail, href: "Saumya140904@gmail.com", label: "Email" }
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#home" className="text-2xl font-bold text-gradient">
              Saumya Shrivastava
            </Link>
            <p className="text-muted-foreground">
              Full Stack Developer crafting exceptional digital experiences 
              with modern technologies and creative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-cursor="hover"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Development</li>
              <li>Competetive Programing</li>
              <li>UI/UX Design</li>
              
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor="hover"
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Saumya Shrivastava. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}