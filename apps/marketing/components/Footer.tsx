import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-lg font-bold text-foreground tracking-tight">
            Flow<span className="text-primary">-HQ</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="/product" className="hover:text-foreground transition-colors">
              Product
            </Link>
            <Link href="/#roadmap" className="hover:text-foreground transition-colors">
              Roadmap
            </Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
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
