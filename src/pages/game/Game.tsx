
import { Star } from "lucide-react";
import Layout from "@/components/Layout";
// import { games, reviews } from "@/data/mockData";
import useHooks from "./useHooks";

// Страница рецензий для конкретной игры
const Game = () => {
  const { gameInfo } = useHooks();
  // Находим игру по ID

  // Находим все рецензии для этой игры
  const imageURL = import.meta.env.VITE_API_IMAGE_URL;

  // Если игра не найдена, показываем сообщение об ошибке
  if (!gameInfo) {
    return (
      <Layout>
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold text-white mb-4">
            Игра не найдена
          </h1>
          <p className="text-gray-400">
            Запрашиваемая игра не существует или была удалена.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Хедер игры с изображением и информацией */}
      <div className="relative h-96 rounded-lg overflow-hidden mb-8">
        <img
          src={imageURL + gameInfo?.photo}
          alt={gameInfo?.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{gameInfo?.name}</h1>
          <div className="flex gap-4 text-gray-200">
            <span>{gameInfo?.year}</span>
            <span>{gameInfo?.category?.name}</span>
          </div>
        </div>
      </div>

      {/* Описание игры */}
      <div className="bg-gameverse-light p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Описание</h2>
        <p className="text-gray-200">{gameInfo?.info}</p>
      </div>

      {/* Рецензии игроков */}
      <div className="bg-gameverse-light p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Рецензии игроков</h2>

        {gameInfo?.reviews?.length > 0 ? (
          <div className="space-y-6">
            {gameInfo?.reviews?.map((review: any) => (
              <div
                key={review.id}
                className="border-b border-gameverse-darker pb-6 last:border-b-0"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-gameverse-red">
                      {review?.user?.login}
                    </h3>
                    <span className="text-sm text-gray-400">
                      {review?.created_at
                        ? new Date(review?.created_at).toLocaleDateString()
                        : "-"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-bold">
                      {review.rate}
                    </span>
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={18}
                    />
                  </div>
                </div>
                <p className="text-gray-200">{review.message}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400">
              Пока нет рецензий для этой игры. Будьте первым, кто оставит свое
              мнение!
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Game;
