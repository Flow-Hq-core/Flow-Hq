import ProductFrame from "./ProductFrame";

/**
 * Mirrors the real roadmap map in apps/app: cream/amber nodes with heavy
 * dark borders, joined by a blue spine. Kept faithful so the marketing
 * visual and the product don't drift apart.
 */
const branches = [
  { side: "left", category: "Foundation", node: "Business Model" },
  { side: "right", category: "Market", node: "ICP Research" },
  { side: "left", category: "Strategy", node: "Positioning" },
  { side: "right", category: "Offer", node: "Pricing Model" }
] as const;

const RoadmapVisual = () => {
  return (
    <ProductFrame label="Flow Roadmaps — Business Operating">
      <div className="relative py-2">
        {/* Spine */}
        <div
          aria-hidden
          className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-primary/80"
        />

        <div className="relative space-y-4">
          {branches.map((b) => (
            <div key={b.category} className="flex items-center">
              {b.side === "left" ? (
                <>
                  <div className="flex flex-1 items-center justify-end gap-0">
                    <div className="rounded-md border-2 border-flow-gray-900 bg-amber-300 px-3 py-1.5 text-[11px] font-semibold leading-tight text-flow-gray-900">
                      {b.category}
                    </div>
                    <span aria-hidden className="h-[2px] w-4 bg-primary/80" />
                  </div>
                  <div className="flex flex-1 items-center">
                    <span aria-hidden className="h-[2px] w-4 bg-primary/50" />
                    <div className="rounded-md border-2 border-flow-gray-900 bg-[#f5e6c8] px-2.5 py-1.5 text-[10px] font-medium leading-tight text-flow-gray-900">
                      {b.node}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-1 items-center justify-end">
                    <div className="rounded-md border-2 border-flow-gray-900 bg-[#f5e6c8] px-2.5 py-1.5 text-[10px] font-medium leading-tight text-flow-gray-900">
                      {b.node}
                    </div>
                    <span aria-hidden className="h-[2px] w-4 bg-primary/50" />
                  </div>
                  <div className="flex flex-1 items-center">
                    <span aria-hidden className="h-[2px] w-4 bg-primary/80" />
                    <div className="rounded-md border-2 border-flow-gray-900 bg-amber-300 px-3 py-1.5 text-[11px] font-semibold leading-tight text-flow-gray-900">
                      {b.category}
                    </div>
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
