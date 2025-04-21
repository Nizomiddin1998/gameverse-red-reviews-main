import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { useQuery } from "@tanstack/react-query";

export default function useHooks() {
  const { data: games = null } = useQuery({
    queryKey: [REACT_QUERY_KEYS.VIEW_GAMES_LIST],
    queryFn: () => request(ENDPOINTS.GAMES),
    select: (res) => {
      return res?.data?.data?.slice(0, 5);
    },
  });
  const { data: blogs = null } = useQuery({
    queryKey: [REACT_QUERY_KEYS.VIEW_BLOGS_LIST],
    queryFn: () => request(ENDPOINTS.BLOGS),
    select: (res) => {
      return res?.data?.data?.slice(0, 5);
    },
  });

  return { blogs, games };
}
