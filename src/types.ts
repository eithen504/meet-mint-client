import type { PROBLEM_IDS } from "./constants";

export type Language = "javascript" | "python" | "java";

export type ExecutionResult = {
  success: boolean;
  output: string;
  error?: string;
};

export type LanguageVersionConfig = {
  language: string;
  version: string;
};

export interface LanguageConfig {
  name: string;
  icon: string;
  monacoLang: string;
}

export type LanguageConfigMap = Record<Language, LanguageConfig>;

// Problem types
export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface Description {
  text: string;
  notes: string[];
}

export interface StarterCode {
  javascript: string;
  python: string;
  java: string;
}

export interface ExpectedOutput {
  javascript: string;
  python: string;
  java: string;
}

export interface Problem {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  description: Description;
  examples: Example[];
  constraints: string[];
  starterCode: StarterCode;
  expectedOutput: ExpectedOutput;
}

// ✅ Union type automatically generated
export type ProblemId = (typeof PROBLEM_IDS)[number];

// Problems map type
export type ProblemsMap = Record<ProblemId, Problem>;

export type Difficulty = "Easy" | "Medium" | "Hard";

export type ProblemData = {
  problem: string;
  difficulty: Difficulty;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  profileImage: string;
  clerkId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type SessionStatus = "active" | "completed";

export type Session = {
  _id: string;
  problem: ProblemId;
  difficulty: Difficulty;
  host: string;
  participant: string;
  status: SessionStatus;
  callId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type SessionResponse = {
  _id: string;
  problem: ProblemId;
  difficulty: Difficulty;
  host: User;
  participant: User;
  status: SessionStatus;
  callId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type StreamUser = {
  id: string;
  name: string;
  image?: string;
};