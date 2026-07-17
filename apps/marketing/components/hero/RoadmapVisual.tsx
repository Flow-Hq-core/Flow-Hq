import ProductFrame from "./ProductFrame";

/**
 * Mirrors the real roadmap map in apps/app: cream/amber nodes with heavy
 * dark borders, joined by a blue spine. Kept faithful so the marketing
 * visual and the product don't drift apart.
 *
 * Branch count is tuned to fill the hero backdrop vertically and crop.
 */
const branches = [
  { side: "left", category: "Foundation", node: "Business Model" },
  { side: "right", category: "Market", node: "ICP Research" },
  { side: "left", category: "Strategy", node: "Positioning" },
  { side: "right", category: "Offer", node: "Pricing Model" },
  { side: "left", category: "Growth", node: "Acquisition" },
  { side: "right", category: "Sales", node: "Pipeline" },
  { side: "left", category: "Operations", node: "Workflows" },
  { side: "right", category: "Retention", node: "Churn Analysis" },
  { side: "left", category: "Finance", node: "Unit Economics" }
] as const;

const Node = ({ label }: { label: string }) => (
  <div className="whitespace-nowrap rounded-md border-2 border-flow-gray-900 bg-[#f5e6c8] px-3.5 py-2 text-[13px] font-medium leading-tight text-flow-gray-900">
    {label}
  </div>
);

const Category = ({ label }: { label: string }) => (
  <div className="whitespace-nowrap rounded-md border-2 border-flow-gray-900 bg-amber-300 px-4 py-2.5 text-[14px] font-semibold leading-tight text-flow-gray-900">
    {label}
  </div>
);

const RoadmapVisual = () => {
  return (
    <ProductFrame label="Flow Roadmaps — Business Operating">
      <div className="relative py-1">
        {/* Spine */}
        <div
          aria-hidden
          className="absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-primary/80"
        />

        <div className="relative space-y-5">
          {branches.map((b) => (
            <div key={b.category} className="flex items-center">
              {b.side === "left" ? (
                <>
                  <div className="flex flex-1 items-center justify-end">
                    <Category label={b.category} />
                    <span aria-hidden className="h-[3px] w-6 bg-primary/80" />
                  </div>
                  <div className="flex flex-1 items-center">
                    <span aria-hidden className="h-[3px] w-6 bg-primary/50" />
                    <Node label={b.node} />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-1 items-center justify-end">
                    <Node label={b.node} />
                    <span aria-hidden className="h-[3px] w-6 bg-primary/50" />
                  </div>
                  <div className="flex flex-1 items-center">
                    <span aria-hidden className="h-[3px] w-6 bg-primary/80" />
                    <Category label={b.category} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </ProductFrame>
  );
};

export default RoadmapVisual;
