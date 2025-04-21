import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { ErrorProps } from "@/types/error";

export default function useHooks() {
  const { id } = useParams<{ id: string }>();
  const { data: blogInfo = null, refetch } = useQuery({
    queryKey: [REACT_QUERY_KEYS.VIEW_BLOGS_LIST + id],
    queryFn: () => request(ENDPOINTS.BLOGS + `/${id}`),
    select: (res: any) => {
      return res?.data?.data;
    },
  });
  const { mutate } = useMutation(
    () => request.post(ENDPOINTS.BLOGS + `/${id}/` + ENDPOINTS.LIKE_TOGGLE),
    {
      onSuccess: (res) => {
        toast.success("Вы поставили лайк!");
        refetch();
      },
      onError: (err: ErrorProps) => {
        toast.error(err.response?.data?.message || "Что-то пошло не так.");
      },
    }
  );
  return { blogInfo, mutate };
}
