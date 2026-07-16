/**
 * Shared chrome for the hero product visuals, so every slide reads as the
 * same app rather than five unrelated graphics.
 */
const ProductFrame = ({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-flow-lg">
      <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-flow-gray-200" />
          <span className="h-2 w-2 rounded-full bg-flow-gray-200" />
          <span className="h-2 w-2 rounded-full bg-flow-gray-200" />
        </span>
        <span className="ml-1 text-xs font-medium text-muted-foreground">{label}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default ProductFrame;
