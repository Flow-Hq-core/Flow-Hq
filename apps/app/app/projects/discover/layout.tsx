import Link from "next/link";
import "../projects.css";

export default function ProjectsDiscoverLayout({ children }: { children: React.ReactNode }) {
  return <div className="projects-theme">{children}</div>;
}
