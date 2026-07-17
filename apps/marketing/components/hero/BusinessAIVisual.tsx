import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import ProductFrame from "./ProductFrame";

/**
 * Business AI is a placeholder in the app today. This shows the surface
 * described in docs/Cluade/07-business-ai-module.md: analysis in, findings
 * and an action plan out, with the ability to spin up a project.
 *
 * Sized to fill the hero backdrop and crop.
 */
const findings = [
  {
    icon: AlertCircle,
    severity: "Weak",
    label: "Positioning is undifferentiated",
    detail: "You read as one of four near-identical brands in the category.",
    tone: "warn"
  },
  {
    icon: AlertCircle,
    severity: "Leak",
    label: "No upsell path after checkout",
    detail: "First-order customers never see a second offer.",
    tone: "warn"
  },
  {
    icon: AlertCircle,
    severity: "Risk",
    label: "Single acquisition channel",
    detail: "84% of new customers come from one paid source.",
    tone: "warn"
  },
  {
    icon: CheckCircle2,
    severity: "Strong",
    label: "Retention above category median",
    detail: "Repeat rate is 38% against a 24% benchmark.",
    tone: "ok"
  }
];

const BusinessAIVisual = () => {
  return (
    <ProductFrame label="Flow Business AI — Analysis">
      <div className="mb-5 rounded-xl border border-border bg-muted/40 p-4">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
          Analyzing
        </p>
        <p className="mt-1 text-[15px] font-medium text-foreground">
          D2C coffee brand · 14 months old · £40k MRR
        </p>
      </div>

      <div className="space-y-3">
        {findings.map((f) => (
          <div
            key={f.label}
            className="flex items-start gap-3.5 rounded-lg border border-border bg-background p-4"
          >
            <f.icon
              className={
                f.tone === "ok"
                  ? "mt-0.5 h-5 w-5 shrink-0 text-primary"
                  : "mt-0.5 h-5 w-5 shrink-0 text-destructive"
              }
            />
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                {f.severity}
              </p>
              <p className="text-[15px] font-medium leading-tight text-foreground">{f.label}</p>
              <p className="mt-1 text-[13px] leading-snug text-muted-foreground">{f.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-lg bg-accent px-4 py-3 text-[14px] font-semibold text-primary">
        Create project to fix positioning
        <ArrowRight className="h-4 w-4" />
      </div>
    </ProductFrame>
  );
};

export default BusinessAIVisual;
