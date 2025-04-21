import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { ErrorProps } from "@/types/error";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

export default function useHooks() {
  const [title, setTitle] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // request.put(ENDPOINTS.USER, data, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   }),
  const navigate = useNavigate();
  const { data: category = null } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_CATEGORIES],
    queryFn: () => request(ENDPOINTS.CATIGORY),
    select: (res) => {
      const payload = [
        // {
        //   name: "Все жанры",
        //   id: "",
        // },
        ...res?.data?.data,
      ];
      return payload;
    },
  });

  const { mutate } = useMutation(
    (data: any) => request.post(ENDPOINTS.BLOGS, data),
    {
      onSuccess: (res) => {
        setTitle("");
        setSelectedGenre("");
        setContent("");
        setImageUrl("");
        navigate(-1);
        toast.success("Блог успешно опубликован!");
      },
      onError: (err: ErrorProps) => {
        toast.error(err.response?.data?.message || "Что-то пошло не так.");
      },
    }
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Пожалуйста, укажите заголовок блога!");
      return;
    }

    if (!selectedGenre) {
      alert("Пожалуйста, выберите жанр!");
      return;
    }

    if (!content.trim()) {
      alert("Пожалуйста, напишите текст блога!");
      return;
    }

    if (!imageUrl.trim()) {
      alert("Пожалуйста, укажите URL изображения для блога!");
      return;
    }

    // Здесь был бы API-запрос для публикации блога
    console.log("Blog submitted:", {
      title,
      genre: selectedGenre,
      content,
      imageUrl,
    });

    const payload = {
      name: title,
      category_id: selectedGenre,
      info: content,
      image: imageUrl,
    };
    mutate(payload);
  };
  return {
    category,
    title,
    setTitle,
    selectedGenre,
    setSelectedGenre,
    content,
    setContent,
    imageUrl,
    setImageUrl,
    handleSubmit,
  };
}
