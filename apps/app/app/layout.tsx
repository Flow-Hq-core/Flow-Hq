import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flow-HQ App",
  description: "Flow-HQ SaaS platform for roadmaps, projects, and future AI modules."
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

