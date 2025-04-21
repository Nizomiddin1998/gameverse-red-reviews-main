import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function useHooks() {
  const { id } = useParams<{ id: string }>();
  const { data: blogInfo = null } = useQuery({
    queryKey: [REACT_QUERY_KEYS.VIEW_BLOGS_LIST + id],
    queryFn: () => request(ENDPOINTS.BLOGS + `/${id}`),
    select: (res: any) => {
      return res?.data?.data;
    },
  });
  return { blogInfo };
}
