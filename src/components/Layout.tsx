
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageCircle, HelpCircle, User, Home } from 'lucide-react';

// Компонент макета страницы, включающий шапку и подвал
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gameverse-darker py-4 px-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Левая часть шапки с логотипом */}
          <Link to="/" className="text-xl font-bold text-gameverse-red">
            GameVerse
          </Link>
          
          {/* Правая часть шапки с иконками навигации */}
          <div className="flex space-x-6 items-center">
            <Link to="/friends" className="nav-icon" title="Друзья">
              <Users size={24} />
            </Link>
            <Link to="/chats" className="nav-icon" title="Чаты">
              <MessageCircle size={24} />
            </Link>
            <Link to="/faq" className="nav-icon" title="Часто задаваемые вопросы">
              <HelpCircle size={24} />
            </Link>
            <Link to="/profile" className="nav-icon" title="Профиль">
              <User size={24} />
            </Link>
          </div>
        </div>
      </header>
      
      {/* Основной контент страницы */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      
      {/* Подвал сайта */}
      <footer className="bg-gameverse-darker py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                О нас
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                Правила пользования
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              2023-2025 GameVerse. Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
