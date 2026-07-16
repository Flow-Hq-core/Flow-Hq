import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import ProductFrame from "./ProductFrame";

/**
 * Business AI is a placeholder in the app today. This shows the surface
 * described in docs/Cluade/07-business-ai-module.md: analysis in, findings
 * and an action plan out, with the ability to spin up a project.
 */
const findings = [
  { icon: AlertCircle, severity: "Weak", label: "Positioning is undifferentiated", tone: "warn" },
  { icon: AlertCircle, severity: "Leak", label: "No upsell path after checkout", tone: "warn" },
  { icon: CheckCircle2, severity: "Strong", label: "Retention above category median", tone: "ok" }
];

const BusinessAIVisual = () => {
  return (
    <ProductFrame label="Flow Business AI — Analysis">
      <div className="mb-3 rounded-lg border border-border bg-muted/40 p-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Analyzing
        </p>
        <p className="mt-0.5 text-[11px] font-medium text-foreground">
          D2C coffee brand · 14 months old · £40k MRR
        </p>
      </div>

      <div className="space-y-2">
        {findings.map((f) => (
          <div
            key={f.label}
            className="flex items-start gap-2.5 rounded-md border border-border bg-background p-2.5"
          >
            <f.icon
              className={
                f.tone === "ok"
                  ? "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                  : "mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive"
              }
            />
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                {f.severity}
              </p>
              <p className="text-[11px] font-medium leading-tight text-foreground">{f.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-1.5 rounded-md bg-accent px-2.5 py-2 text-[11px] font-semibold text-primary">
        Create project to fix positioning
        <ArrowRight className="h-3 w-3" />
      </div>
    </ProductFrame>
  );
};

export default BusinessAIVisual;
