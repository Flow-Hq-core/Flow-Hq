import { ProjectsNav } from "@/components/projects/ProjectsNav";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { LiveDemo } from "@/components/projects/LiveDemo";
import { Explore } from "@/components/projects/Explore";
import { HowItWorks } from "@/components/projects/HowItWorks";
import { Features } from "@/components/projects/Features";
import { RoadmapExample } from "@/components/projects/RoadmapExample";
import { Testimonials } from "@/components/projects/Testimonials";
import { CTA } from "@/components/projects/CTA";
import { ProjectsFooter } from "@/components/projects/ProjectsFooter";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ProjectsNav />
      <ProjectsHero />
      <LiveDemo />
      <Explore />
      <HowItWorks />
      <Features />
      <RoadmapExample />
      <Testimonials />
      <CTA />
      <ProjectsFooter />
    </main>
  );
}
