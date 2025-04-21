
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { games, blogs, upcomingGames } from '@/data/mockData';

// Главная страница сайта
const Index = () => {
  // Получаем первые 5 игр, блогов и релизов для показа на главной
  const featuredGames = games.slice(0, 5);
  const featuredBlogs = blogs.slice(0, 5);
  const upcomingReleases = upcomingGames.slice(0, 5);

  return (
    <Layout>
      {/* Hero секция с большим фото */}
      <section className="relative w-full h-[500px] mb-12 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
          alt="GameVerse Hero" 
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-4xl font-bold mb-2">Добро пожаловать в GameVerse</h1>
          <p className="text-xl">Ваш путеводитель в мире игровых рецензий и обзоров</p>
        </div>
      </section>

      {/* Секция Игры */}
      <section className="mb-16">
        <div className="section-title">
          <h2>Игры</h2>
          <Link to="/games" className="view-all">
            Смотреть все игры <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredGames.map((game) => (
            <Link to={`/game/${game.id}`} key={game.id} className="game-card">
              <div className="h-48 overflow-hidden">
                <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white truncate">{game.title}</h3>
                <div className="flex justify-between text-sm text-gray-300 mt-2">
                  <span>{game.releaseYear}</span>
                  <span>{game.genre}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Секция Блоги */}
      <section className="mb-16">
        <div className="section-title">
          <h2>Блоги</h2>
          <Link to="/blogs" className="view-all">
            Все статьи <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredBlogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id} className="blog-card">
              <div className="h-48 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white truncate">{blog.title}</h3>
                <div className="flex flex-col text-sm text-gray-300 mt-2">
                  <span className="text-gameverse-red">{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Секция Календарь релизов */}
      <section className="mb-16">
        <div className="section-title">
          <h2>Календарь релизов</h2>
          <Link to="/upcoming" className="view-all">
            Смотреть все <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {upcomingReleases.map((game) => (
            <div key={game.id} className="game-card">
              <div className="h-48 overflow-hidden">
                <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white truncate">{game.title}</h3>
                <div className="flex justify-between text-sm text-gray-300 mt-2">
                  <span>{game.releaseYear}</span>
                  <span>{game.genre}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
