import dynamic from 'next/dynamic';
import { Navigation } from '@/components/navigation';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import HomeClient from '@/components/homeclient';



export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HomeClient/>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}