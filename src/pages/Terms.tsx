
import React from 'react';
import Layout from '../components/Layout';

// Страница "Правила пользования"
const Terms = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Правила пользования</h1>
        
        <div className="bg-gameverse-light p-6 rounded-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gameverse-red mb-4">1. Общие положения</h2>
            <p className="text-gray-200 mb-4">
              Добро пожаловать на GameVerse. Пользуясь нашим сайтом, вы соглашаетесь с настоящими правилами пользования.
              Если вы не согласны с правилами, пожалуйста, не используйте наш сайт.
            </p>
            <div className="flex justify-center my-6">
              <img 
                src="https://images.unsplash.com/photo-1511808657289-3c1065ec1d8d?q=80&w=2070&auto=format&fit=crop" 
                alt="Правила" 
                className="max-w-full h-auto rounded-lg"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gameverse-red mb-4">2. Регистрация и учетная запись</h2>
            <p className="text-gray-200 mb-4">
              Для использования некоторых функций сайта необходимо зарегистрироваться. 
              Вы обязуетесь предоставлять точную и актуальную информацию при регистрации.
            </p>
            <p className="text-gray-200 mb-4">
              Вы несете ответственность за сохранение конфиденциальности своей учетной записи 
              и пароля, а также за все действия, совершаемые под вашей учетной записью.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gameverse-red mb-4">3. Пользовательский контент</h2>
            <p className="text-gray-200 mb-4">
              Публикуя контент на GameVerse, вы гарантируете, что:
            </p>
            <ul className="list-disc pl-6 text-gray-200 mb-4">
              <li className="mb-2">Вы являетесь автором контента или у вас есть права на его публикацию</li>
              <li className="mb-2">Контент не нарушает права третьих лиц</li>
              <li className="mb-2">Контент соответствует законодательству и не содержит запрещенных материалов</li>
              <li className="mb-2">Контент не является оскорбительным, дискриминационным или агрессивным</li>
            </ul>
            <div className="flex justify-center my-6">
              <img 
                src="https://images.unsplash.com/photo-1611457899297-33f1663caebc?q=80&w=2070&auto=format&fit=crop" 
                alt="Контент" 
                className="max-w-full h-auto rounded-lg"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gameverse-red mb-4">4. Модерация контента</h2>
            <p className="text-gray-200 mb-4">
              GameVerse оставляет за собой право удалять или редактировать любой пользовательский контент, 
              который нарушает настоящие правила или может быть признан неприемлемым по другим причинам.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gameverse-red mb-4">5. Интеллектуальная собственность</h2>
            <p className="text-gray-200 mb-4">
              Все материалы, представленные на сайте, включая тексты, изображения, логотипы и код, 
              являются собственностью GameVerse или используются с разрешения правообладателей.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gameverse-red mb-4">6. Изменения правил</h2>
            <p className="text-gray-200 mb-4">
              GameVerse оставляет за собой право изменять настоящие правила пользования в любое время. 
              Продолжая пользоваться сайтом после внесения изменений, вы принимаете обновленные правила.
            </p>
            <div className="flex justify-center my-6">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
                alt="Правила" 
                className="max-w-full h-auto rounded-lg"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
