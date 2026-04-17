import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import type { SkillTrend, SalaryTrend } from "@/types";

export function useSkillTrends(category?: string, period = "monthly") {
  return useQuery<{ trends: SkillTrend[] }>({
    queryKey: ["trends", "skills", category, period],
    queryFn: () =>
      apiClient.get("/trends/skills", { params: { category, period } }).then((res) => res.data),
  });
}

export function useSalaryTrends(jobTitle?: string) {
  return useQuery<{ salary_trends: SalaryTrend[] }>({
    queryKey: ["trends", "salary", jobTitle],
    queryFn: () =>
      apiClient.get("/trends/salary", { params: { job_title: jobTitle } }).then((res) => res.data),
  });
}
