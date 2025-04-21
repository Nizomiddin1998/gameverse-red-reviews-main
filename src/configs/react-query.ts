import type { ErrorProps } from "@/types/error";
import { QueryCache, QueryClient, MutationCache } from "@tanstack/react-query";

const mutationCache = new MutationCache({
  onError: (res) => {
    const error = res as unknown as ErrorProps;
    console.log(error);
  },
});

const queryCache = new QueryCache({
  onError: async (res) => {
    const error = res as unknown as ErrorProps;
    if (error?.response?.status === 403) {
      window.history.back();
    }
  },
});

export const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount, res) {
        const error = res as unknown as ErrorProps;
        if (error.status === 404) return false;
        if (failureCount < 1) return true;
        return false;
      },
    },
  },
});
