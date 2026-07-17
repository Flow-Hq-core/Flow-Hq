import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-lg font-bold text-foreground tracking-tight">
            Flow<span className="text-primary">-HQ</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <Link href="/products" className="transition-colors hover:text-foreground">
              Products
            </Link>
            <Link href="/use-cases" className="transition-colors hover:text-foreground">
              Use Cases
            </Link>
            <Link href="/solutions" className="transition-colors hover:text-foreground">
              Solutions
            </Link>
            <Link href="/resources" className="transition-colors hover:text-foreground">
              Resources
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground">
              Pricing
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground">
              About
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Flow-HQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
