import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flow-HQ — Build and scale your business with structure",
  description:
    "Flow-HQ turns your idea into a complete business roadmap with systems, workflows, diagnostics, and execution tools tailored to your stage.",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

