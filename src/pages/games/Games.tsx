import { Link } from "react-router-dom";
import { Search, Bookmark } from "lucide-react";
import Layout from "../../components/Layout";
// import { genres } from "../../data/mockData";
import useHooks from "./useHooks";

// Страница "Игры"
const Games = () => {
  const imageUrl = import.meta.env.VITE_API_IMAGE_URL;
  const {
    games,
    selectedGenre,
    setSelectedGenre,
    category,
    searchTerm,
    setSearchTerm,
    handleFavorite,
  } = useHooks();
  // Фильтрация игр по поисковому запросу и жанру

  return (
    <Layout>
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold text-white">Игры</h1>
        <Link to="/write-review" className="custom-button">
          Написать рецензию
        </Link>
      </div>

      {/* Фильтры и поиск */}
      <div className="bg-gameverse-light p-4 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Поиск игр..."
              className="custom-input pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>

          <select
            className="custom-input md:w-1/4"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {category?.map((genre: { id: number; name: string }) => (
              <option key={genre.id} value={genre?.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Список игр */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games?.map((game: any) => (
          <div key={game.id} className="game-card relative">
            <Link to={`/game/${game.id}`}>
              <div className="h-56 overflow-hidden">
                <img
                  src={imageUrl + game?.photo}
                  alt={game.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white text-lg truncate">
                  {game.name}
                </h3>
                <div className="flex justify-between text-sm text-gray-300 mt-2">
                  <span>{game.year}</span>
                  <span>{game.category?.name}</span>
                </div>
              </div>
            </Link>
            <button className="absolute top-3 right-3 bg-gameverse-darker p-2 rounded-full opacity-80 hover:opacity-100 transition-opacity">
              <Bookmark
                className="text-white"
                size={16}
                onClick={() => handleFavorite(game?.id)}
              />
            </button>
          </div>
        ))}
      </div>

      {games?.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-400 text-lg">
            Игры не найдены. Попробуйте изменить параметры поиска.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Games;
