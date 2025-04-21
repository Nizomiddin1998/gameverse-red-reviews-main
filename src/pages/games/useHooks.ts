import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { ErrorProps } from "@/types/error";

export default function useHooks() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: games = null, refetch } = useQuery({
    queryKey: [REACT_QUERY_KEYS.VIEW_GAMES_LIST, selectedGenre, searchTerm],
    queryFn: ({ signal }) =>
      request(ENDPOINTS.GAMES, {
        params: {
          category_id: selectedGenre || undefined,
          name: searchTerm || undefined,
        },
        signal,
      }),
    select: (res) => {
      return res?.data?.data;
    },
  });
  const { data: category = null } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_CATEGORIES],
    queryFn: () => request(ENDPOINTS.CATIGORY),
    select: (res) => {
      const payload = [
        {
          name: "Все жанры",
          id: "",
        },
        ...res?.data?.data,
      ];
      return payload;
    },
  });
  const { mutate } = useMutation(
    (data: any) => request.post(ENDPOINTS.FAVORITES, data),
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
  const handleFavorite = (id: number) => mutate({ game_id: id });
  return {
    games,
    selectedGenre,
    setSelectedGenre,
    category,
    setSearchTerm,
    searchTerm,
    handleFavorite,
  };
}
