// ── 채용공고 ────────────────────────────────────────────────────
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  skills: string[];
  source: "saramin" | "jobkorea" | "wanted" | "linkedin";
  postedAt: string;
  url: string;
}

// ── 트렌드 ──────────────────────────────────────────────────────
export interface SkillTrend {
  skill: string;
  count: number;
  period: string;
}

export interface SalaryTrend {
  jobTitle: string;
  avgSalary: number;
  minSalary: number;
  maxSalary: number;
}

// ── 이력서 분석 ─────────────────────────────────────────────────
export interface ResumeAnalysis {
  resumeId: string;
  score: number;
  matchedSkills: string[];
  missingSkills: string[];
  feedback: string[];
}

// ── 기업 추천 ───────────────────────────────────────────────────
export interface CompanyRecommendation {
  company: string;
  matchScore: number;
  openPositions: number;
  reasons: string[];
}
