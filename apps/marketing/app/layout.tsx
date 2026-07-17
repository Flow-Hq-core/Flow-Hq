import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flow-HQ — Build your path. Execute your ideas. Grow with AI.",
  description:
    "One system for finding your path, turning it into real work, and learning what you need along the way. Roadmaps, Projects, Business AI, and Playlists — connected.",
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

