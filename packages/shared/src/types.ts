export type FlowModule =
  | "roadmaps"
  | "business-ai"
  | "projects"
  | "playlists"
  | "templates"
  | "industries";

export type RoadmapPhase = {
  id: string;
  title: string;
  description?: string;
  order: number;
};

export type ProjectRoadmap = {
  id: string;
  title: string;
  domain: string;
  phases: RoadmapPhase[];
};
