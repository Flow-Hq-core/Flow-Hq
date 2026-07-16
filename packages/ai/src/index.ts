/** Roadmap generation prompts and orchestration. */
export type RoadmapGeneratorInput = {
  prompt: string;
  domain?: string;
};

export type RoadmapGeneratorResult = {
  phases: Array<{ title: string; summary: string }>;
};

export async function generateRoadmap(_input: RoadmapGeneratorInput): Promise<RoadmapGeneratorResult> {
  throw new Error("@flow-hq/ai: generateRoadmap is not implemented yet.");
}

/** Business AI workflows and analysis. */
export type BusinessAIInput = {
  context: string;
};

export async function runBusinessWorkflow(_input: BusinessAIInput): Promise<{ output: string }> {
  throw new Error("@flow-hq/ai: runBusinessWorkflow is not implemented yet.");
}

/** Playlist curation and sequencing. */
export type PlaylistGeneratorInput = {
  topic: string;
  audience?: string;
};

export async function generatePlaylist(_input: PlaylistGeneratorInput): Promise<{ items: string[] }> {
  throw new Error("@flow-hq/ai: generatePlaylist is not implemented yet.");
}

/** Workflow generator for multi-step automations. */
export type WorkflowGeneratorInput = {
  goal: string;
};

export async function generateWorkflow(_input: WorkflowGeneratorInput): Promise<{ steps: string[] }> {
  throw new Error("@flow-hq/ai: generateWorkflow is not implemented yet.");
}

export const PROMPT_TEMPLATES = {
  roadmap: "Generate a phased roadmap for: {{prompt}}",
  business: "Analyze this business context: {{context}}",
  playlist: "Curate a learning playlist for: {{topic}}"
} as const;
