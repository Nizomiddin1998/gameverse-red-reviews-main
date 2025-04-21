import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { ErrorProps } from "@/types/error";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";

type FormValues = {
  selectedGame: string;
  review: string;
  rating: string;
};

export default function useHooks() {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const { data: games = null } = useQuery({
    queryKey: [REACT_QUERY_KEYS.VIEW_GAMES_LIST],
    queryFn: ({ signal }) =>
      request(ENDPOINTS.GAMES, {
        signal,
      }),
    select: (res) => {
      return res?.data?.data;
    },
  });
  const { mutate } = useMutation(
    (data: FormValues | any) => request.post(ENDPOINTS.REVIEWS, data),
    {
      onSuccess: (res) => {
        navigate(-1);
        toast.success("Рецензия успешно опубликована!");
      },
      onError: (err: ErrorProps) => {
        toast.error(err.response?.data?.message || "Что-то пошло не так.");
      },
    }
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedGame) {
      alert("Пожалуйста, выберите игру!");
      return;
    }

    if (!review.trim()) {
      alert("Пожалуйста, напишите текст рецензии!");
      return;
    }

    if (!rating) {
      alert("Пожалуйста, укажите оценку игры!");
      return;
    }

    // Здесь был бы API-запрос для публикации рецензии
    console.log("Review submitted:", {
      gameId: selectedGame,
      review,
      rating,
    });

    // Очистка формы после отправки
    setSelectedGame("");
    setReview("");
    setRating("");
    const payload = {
      game_id: selectedGame,
      rate: rating,
      message: review,
    };
    mutate(payload);
    // alert("Рецензия успешно опубликована!");
  };
  return {
    games,
    selectedGame,
    setSelectedGame,
    review,
    setReview,
    rating,
    setRating,
    handleSubmit,
  };
}
