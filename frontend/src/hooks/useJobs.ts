import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import type { Job } from "@/types";

interface JobsParams {
  keyword?: string;
  location?: string;
  page?: number;
  size?: number;
}

interface JobsResponse {
  jobs: Job[];
  total: number;
  page: number;
  size: number;
}

export function useJobs(params: JobsParams = {}) {
  return useQuery<JobsResponse>({
    queryKey: ["jobs", params],
    queryFn: () =>
      apiClient.get("/jobs", { params }).then((res) => res.data),
  });
}
