
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Layout from '../components/Layout';
import { upcomingGames, genres } from '../data/mockData';

// Страница "Календарь релизов"
const Upcoming = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Все жанры');
  
  // Фильтрация игр по поисковому запросу и жанру
  const filteredGames = upcomingGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'Все жанры' || game.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Скоро в релизе</h1>
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
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <select
            className="custom-input md:w-1/4"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Список будущих релизов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <div key={game.id} className="game-card">
            <div className="h-56 overflow-hidden">
              <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white text-lg truncate">{game.title}</h3>
              <div className="flex justify-between text-sm text-gray-300 mt-2">
                <span>{game.releaseYear}</span>
                <span>{game.genre}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredGames.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-400 text-lg">Игры не найдены. Попробуйте изменить параметры поиска.</p>
        </div>
      )}
    </Layout>
  );
};

export default Upcoming;
