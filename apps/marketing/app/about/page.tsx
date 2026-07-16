import MarketingShell from "@/components/MarketingShell";

export default function AboutPage() {
  return (
    <MarketingShell>
      <section className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Built for founders who need clarity</h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Flow-HQ was created to solve a problem every founder faces: too much fragmented advice
              and not enough structure. Courses give tactics. Consultants give opinions. Flow gives
              you a complete business operating system.
            </p>
            <p>
              Our platform maps your business across 11 strategic layers—from foundation to
              innovation—and equips every layer with the tools to execute: SOPs, workflows,
              diagnostics, and forecasting.
            </p>
            <p>
              Whether you are validating an idea or scaling an existing business, Flow-HQ helps you
              see the whole system, fix what is broken, and build what comes next.
            </p>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
