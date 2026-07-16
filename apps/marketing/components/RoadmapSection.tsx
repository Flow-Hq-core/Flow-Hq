"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const roadmapNodes = [
  { label: "Foundation", desc: "Business model, legal, vision, mission" },
  { label: "Market Intelligence", desc: "ICP, competitors, demand signals" },
  { label: "Strategy", desc: "Positioning, GTM, differentiation" },
  { label: "Offer & Monetization", desc: "Pricing, packaging, revenue model" },
  { label: "Growth", desc: "Acquisition, activation, channels" },
  { label: "Sales", desc: "Pipeline, conversion, outreach" },
  { label: "Operations", desc: "SOPs, workflows, automation" },
  { label: "Retention", desc: "Churn analysis, loyalty, LTV" },
  { label: "Finance", desc: "Forecasting, unit economics, runway" },
  { label: "Brand", desc: "Identity, messaging, perception" },
  { label: "Innovation", desc: "R&D, iteration, new revenue" },
];

const RoadmapSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="roadmap" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Roadmap</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            11 strategic layers. One complete system.
          </h2>
          <p className="text-muted-foreground">
            Not a course. Not a checklist.{" "}
            <span className="font-semibold text-foreground">A business operating system.</span>
          </p>
        </div>

        <div className="mt-12 space-y-2">
          {roadmapNodes.map((node, i) => (
            <div key={i}>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border transition-all text-left ${
                  expanded === i
                    ? "border-primary/30 bg-accent shadow-flow-sm"
                    : "border-border hover:border-primary/20 hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-base font-semibold text-foreground flex-1">{node.label}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform ${
                    expanded === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 py-3 ml-12 text-sm text-muted-foreground">
                      {node.desc}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
