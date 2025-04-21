
import React from 'react';
import Layout from '../components/Layout';

// Страница "О нас"
const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">О нас</h1>
        
        <div className="bg-gameverse-light p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gameverse-red mb-4">Наша миссия</h2>
          <p className="text-gray-200 mb-6">
            GameVerse был создан в 2023 году группой энтузиастов видеоигр, объединенных одной идеей — создать место, 
            где игроки могут делиться своими честными мнениями об играх и найти сообщество единомышленников.
          </p>
          
          <p className="text-gray-200 mb-6">
            Наша цель — предоставить платформу, где каждый геймер может поделиться своими впечатлениями, 
            написать рецензии и блоги, а также найти новых друзей для обсуждения любимых игр.
          </p>
          
          <h2 className="text-2xl font-bold text-gameverse-red mb-4">Команда GameVerse</h2>
          <p className="text-gray-200 mb-6">
            Нашу команду составляют профессиональные разработчики, опытные геймеры и креативные контент-мейкеры. 
            Мы работаем над тем, чтобы сделать GameVerse лучшим местом для игрового сообщества.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gameverse-darker p-4 rounded-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop" 
                alt="Основатель" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Алексей Петров</h3>
              <p className="text-gray-300">Основатель и CEO</p>
            </div>
            
            <div className="bg-gameverse-darker p-4 rounded-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" 
                alt="Технический директор" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Мария Иванова</h3>
              <p className="text-gray-300">Технический директор</p>
            </div>
            
            <div className="bg-gameverse-darker p-4 rounded-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
                alt="Главный редактор" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Дмитрий Соколов</h3>
              <p className="text-gray-300">Главный редактор</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gameverse-red mb-4">Связаться с нами</h2>
          <p className="text-gray-200 mb-2">
            Если у вас есть вопросы, предложения или вы хотите сотрудничать с нами, 
            пожалуйста, напишите нам по адресу:
          </p>
          <p className="text-gameverse-red font-semibold text-xl">GameVerse404@gmail.com</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
