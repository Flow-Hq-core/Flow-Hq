"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeroCards from "./HeroCards";

const pills = [
  "AI Business Roadmaps",
  "Business Operating System",
  "Strategic Execution Engine",
  "Built for Founders",
];

const HeroSection = () => {
  const [pillIndex, setPillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPillIndex((i) => (i + 1) % pills.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-24 gradient-hero overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered text content */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 shadow-flow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2.5" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={pillIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm font-medium text-primary"
                >
                  {pills[pillIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
            Build and scale your business
            <br />
            with <span className="text-primary">structure</span> and{" "}
            <span className="text-primary">clarity</span>.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Flow-HQ turns your idea into a complete business roadmap — with systems,
            workflows, diagnostics, and execution tools tailored to your stage.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button size="lg" className="shadow-flow-blue text-base px-6">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-6">
              Explore the Roadmap
            </Button>
          </div>
        </div>
      </div>

      {/* Full-width scrolling cards */}
      <HeroCards />
    </section>
  );
};

export default HeroSection;
