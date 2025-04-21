import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useHooks() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: blogs = null } = useQuery({
    queryKey: [REACT_QUERY_KEYS.VIEW_BLOGS_LIST, selectedGenre, searchTerm],
    queryFn: ({ signal }) =>
      request(ENDPOINTS.BLOGS, {
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
  return {
    blogs,
    category,
    selectedGenre,
    setSelectedGenre,
    searchTerm,
    setSearchTerm,
  };
}
