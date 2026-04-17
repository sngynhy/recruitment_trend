import { create } from "zustand";
import type { ResumeAnalysis, CompanyRecommendation } from "@/types";

interface ResumeStore {
  resumeId: string | null;
  analysis: ResumeAnalysis | null;
  recommendations: CompanyRecommendation[];
  isAnalyzing: boolean;
  setResumeId: (id: string) => void;
  setAnalysis: (analysis: ResumeAnalysis) => void;
  setRecommendations: (recs: CompanyRecommendation[]) => void;
  setIsAnalyzing: (v: boolean) => void;
  reset: () => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  resumeId: null,
  analysis: null,
  recommendations: [],
  isAnalyzing: false,
  setResumeId: (id) => set({ resumeId: id }),
  setAnalysis: (analysis) => set({ analysis }),
  setRecommendations: (recommendations) => set({ recommendations }),
  setIsAnalyzing: (isAnalyzing) => set({ isAnalyzing }),
  reset: () =>
    set({
      resumeId: null,
      analysis: null,
      recommendations: [],
      isAnalyzing: false,
    }),
}));
