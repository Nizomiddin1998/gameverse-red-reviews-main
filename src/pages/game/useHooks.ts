import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function useHooks() {
  const { id } = useParams<{ id: string }>();
  const { data: gameInfo = null } = useQuery({
    queryKey: [REACT_QUERY_KEYS.VIEW_GAMES_LIST + id],
    queryFn: () => request(ENDPOINTS.GAMES + `/${id}`),
    select: (res) => {
      return res?.data?.data;
    },
    // onSuccess: (res) => {
    //   setAbout(res?.info);
    // },
  });
  return { gameInfo };
}
