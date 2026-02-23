export type NavTab = "programming" | "embedded" | "bas" | "cad" | "photography";

export type TabMeta = {
  title: string;
  subtitle: string;
};

export type Highlight = {
  label: string;
  value: string;
};

export type FeaturedProject = {
  title: string;
  role: string;
  outcome: string;
};

export type TimelineEntry = {
  date: string;
  title: string;
  detail: string;
};

export type EmbeddedRoadmapStage = {
  stage: string;
  status: "Planned" | "In Progress" | "Complete";
  items: string;
};

export type EmbeddedLearningLogEntry = {
  id: string;
  date: string;
  topic: string;
  learned: string;
  blocker: string;
  nextStep: string;
  status: "Template" | "Planned" | "In Progress" | "Completed";
  tags?: string[];
  tools?: string[];
  board?: string;
  confidence?: 1 | 2 | 3 | 4 | 5;
};

export type EmbeddedConceptProjectStatus = "Planned" | "In Progress" | "Completed" | "Reference";

export type EmbeddedConceptCodeSample = {
  title: string;
  filePath: string;
  code: string;
};

export type EmbeddedConceptProject = {
  id: string;
  concept: string;
  workspaceProject: string;
  status: EmbeddedConceptProjectStatus;
  board?: string;
  phase: string;
  learningPlanItems: string[];
  summary: string;
  proof: string;
  sourcePaths: string[];
  codeSample?: EmbeddedConceptCodeSample;
  relatedLogEntryIds?: string[];
};

export type PhotoVariant = {
  width: number;
  load: () => Promise<string>;
};

export type PhotoAsset = {
  key: string;
  variants: PhotoVariant[];
};
