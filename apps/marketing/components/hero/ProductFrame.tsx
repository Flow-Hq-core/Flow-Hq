/**
 * Shared chrome for the hero product visuals, so every slide reads as the
 * same app rather than five unrelated graphics.
 *
 * Sized for the hero backdrop, not a card: these render ~840px wide and are
 * meant to crop off the edges of the frame.
 */
const ProductFrame = ({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-flow-lg">
      <div className="flex items-center gap-2.5 border-b border-border bg-muted/40 px-5 py-3.5">
        <span className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-flow-gray-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-flow-gray-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-flow-gray-200" />
        </span>
        <span className="ml-1.5 text-sm font-medium text-muted-foreground">{label}</span>
      </div>
      <div className="p-7">{children}</div>
    </div>
  );
};

export default ProductFrame;
