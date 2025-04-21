import React from "react";
import { Star } from "lucide-react";
import Layout from "@/components/Layout";
// import { games } from "@/data/mockData";
import useHooks from "./useHooks";

// Страница "Написать рецензию"
const WriteReview = () => {
  const {
    games,
    handleSubmit,
    rating,
    review,
    selectedGame,
    setRating,
    setReview,
    setSelectedGame,
  } = useHooks();
  // Валидация оценки (только цифры от 0 до 5)
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (
      value === "" ||
      (/^\d$/.test(value) && parseInt(value) >= 0 && parseInt(value) <= 5)
    ) {
      setRating(value);
    }
  };

  // Обработка отправки формы

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Написать рецензию
        </h1>

        <div className="bg-gameverse-light p-6 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="game">
                Выберите игру
              </label>
              <select
                id="game"
                className="custom-input"
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
                required
              >
                <option value="">Выберите игру</option>
                {games?.map((game: any) => (
                  <option key={game.id} value={game.id}>
                    {game.name} ({game.year})
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="review">
                Рецензия
              </label>
              <textarea
                id="review"
                className="custom-input min-h-[200px]"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Поделитесь своими впечатлениями об игре..."
                required
              ></textarea>
            </div>

            <div className="mb-8">
              <label className="block text-gray-300 mb-2">
                Оценка игры (от 0 до 5)
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="custom-input w-16 mr-2 text-center"
                  value={rating}
                  onChange={handleRatingChange}
                  placeholder="0-5"
                  required
                />
                <Star className="text-yellow-500" size={24} />
              </div>
            </div>

            <button type="submit" className="custom-button w-full">
              Опубликовать
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default WriteReview;
