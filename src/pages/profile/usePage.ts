import { request } from "@/shared/api/requests";
import { useQuery } from "@tanstack/react-query";

export const usePage = () => {
  const { data: favouriteGames = [] } = useQuery({
    queryKey: ["favourite-games"],
    queryFn: () => request("favorites"),
    select: (res) => {
      return res.data?.data;
    },
  });

  const { data: myBlogs = [] } = useQuery({
    queryKey: ["my-blogs"],
    queryFn: () => request("blogs/my_blogs"),
    select: (res) => {
      return res.data?.data;
    },
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => request("reviews"),
    select: (res) => {
      return res.data?.data;
    },
  });

  const { data: my_reviews = [] } = useQuery({
    queryKey: ["my_reviews"],
    queryFn: () => request("reviews/my_reviews"),
    select: (res) => {
      return res.data?.data;
    },
  });

  return {
    reviews,
    my_reviews,
    myBlogs,
    favouriteGames,
  };
};
