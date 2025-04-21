import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { ErrorProps } from "@/types/error";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "@/components/ui/sonner";

export default function useHooks() {
  const { data: friends = null, refetch: refetchFriends } = useQuery({
    queryKey: [REACT_QUERY_KEYS.VIEW_FRIENDS_LIST],
    queryFn: () => request(ENDPOINTS.FRIENDS),
    select: (res) => {
      return res?.data?.data;
    },
  });
  const { data: friendsSuggestions = null, refetch } = useQuery({
    queryKey: [REACT_QUERY_KEYS.VIEW_FRIENDS_SUGGESTIONS_LIST],
    queryFn: () => request(ENDPOINTS.FRIENDS_SUGGESTIONS),
    select: (res) => {
      return res?.data?.data?.data;
    },
  });
  const { mutate: removeFriend } = useMutation(
    (data: any) => request.delete(ENDPOINTS.FRIENDS + `/${data.id}`),
    {
      onSuccess: (res) => {
        refetch();
        refetchFriends();
        toast.success("Пользователь удален из друзей!");
      },
      onError: (err: ErrorProps) => {
        // toast.error(err.response?.data?.message || "Что-то пошло не так.");
      },
    }
  );
  const { mutate: addFriend } = useMutation(
    (data: any) => request.post(ENDPOINTS.FRIENDS, data),
    {
      onSuccess: (res) => {
        refetch();
        refetchFriends();
        toast.success("Пользователь добавлен в друзья!");
      },
      onError: (err: ErrorProps) => {
        // toast.error(err.response?.data?.message || "Что-то пошло не так.");
      },
    }
  );
  return { friends, friendsSuggestions, removeFriend, addFriend };
}
