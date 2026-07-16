import Link from "next/link";
import { Bell, Download, Share2 } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";

type Section = {
  title: string;
  items: string[];
  note?: string;
};

const sections: Section[] = [
  { title: "1 Foundation", items: ["Vision", "Mission", "Objectives", "Business Model", "Core Assets", "Value Proposition"] },
  { title: "2 Market Intelligence", items: ["Discovery", "Research", "Audience Mapping", "Competitor Mapping", "Market Gaps", "Behavioral Analysis", "Trend Monitoring"], note: "This is where your discovery and research layer lives." },
  { title: "3 Strategy & Positioning", items: ["Strategic Weakness Diagnosis", "Positioning Alignment", "Differentiation Model", "Authority Model", "Messaging Architecture", "Strategic Roadmap"] },
  { title: "4 Offer & Monetization", items: ["Offer Design", "Offer Ladder", "Pricing Strategy", "Monetization Leaks", "Upsell Systems", "Cross-Sell Systems", "Recurring Revenue"] },
  { title: "5 Growth & Distribution", items: ["Acquisition Channels", "Organic Growth", "Paid Growth", "Platform Strategy", "Channel Expansion Strategy", "Distribution Sequences", "Media Planning"] },
  { title: "6 Sales & Conversion", items: ["Funnel Architecture", "Funnel Gaps", "Funnel Redesign", "Webinar Systems", "Challenge Funnels", "1-on-1 Sales Strategy", "Email Sequences", "Landing Page Optimization"] }
];

function splitItems(items: string[]): [string[], string[]] {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

function ItemColumn({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="min-w-[210px] space-y-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
      {items.map((item) => (
        <div key={item} className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 sm:text-sm">
          {item}
        </div>
      ))}
    </div>
  );
}

export default function Business101Page() {
  return (
    <AppShell>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <Link href="/roadmaps" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <span className="text-lg leading-none">←</span>
          <span>All Roadmaps</span>
        </Link>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Bell className="h-4 w-4" />
            <span>Weekly Newsletter</span>
          </Button>
          <Button size="sm" className="gap-1 bg-yellow-400 text-black hover:bg-yellow-500">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
          <Button variant="outline" size="icon" aria-label="Share">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Business 101</h1>
        <p className="mt-2 text-lg text-muted-foreground">Step-by-step guide to understanding and building the foundations of your business.</p>
      </div>

      <div className="mb-10 mt-4 rounded-lg border border-border bg-muted/40">
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-sm bg-yellow-200 px-2 py-1 text-xs font-semibold text-yellow-900">0% DONE</span>
            <span className="text-muted-foreground">0 of 120 Done</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <button className="hover:text-foreground">Share Progress</button>
            <button className="hover:text-foreground">Track Progress</button>
          </div>
        </div>
        <div className="h-1 bg-muted">
          <div className="h-1 w-0 bg-primary" />
        </div>
      </div>

      <section className="mt-10">
        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-slate-200 md:block" />
          <div className="space-y-12">
            {sections.map((section) => {
              const [leftItems, rightItems] = splitItems(section.items);
              return (
                <div key={section.title} className="grid items-start gap-6 md:grid-cols-[minmax(0,1.6fr)_auto_minmax(0,1.6fr)]">
                  <div className="flex justify-end">
                    <ItemColumn items={leftItems} />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="hidden items-center justify-center md:flex">
                      <div className="h-3 w-3 rounded-full border-2 border-background bg-primary shadow-sm" />
                    </div>
                    <div className="rounded-full border border-slate-200 bg-white px-6 py-2 text-center text-sm font-semibold text-slate-900 shadow-sm">{section.title}</div>
                    {section.note && <p className="max-w-xs text-center text-xs text-muted-foreground">{section.note}</p>}
                  </div>
                  <div className="flex justify-start">
                    <ItemColumn items={rightItems} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
