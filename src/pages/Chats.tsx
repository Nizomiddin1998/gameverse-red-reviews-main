
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { messages, users } from '../data/mockData';

// Страница "Чаты"
const Chats = () => {
  // Берем первого пользователя как текущего для примера
  const currentUser = users[0];
  
  // Получаем уникальных пользователей, с которыми есть чаты
  const chatUsers = Object.keys(messages).map(key => {
    const messageArray = messages[parseInt(key)];
    const otherUserId = messageArray[0].senderId === currentUser.id ? 
      messageArray[0].receiverId : messageArray[0].senderId;
    return users.find(user => user.id === otherUserId);
  }).filter(Boolean) as typeof users;
  
  // Состояние для активного чата
  const [activeChat, setActiveChat] = useState(chatUsers[0]?.id || 0);
  const [newMessage, setNewMessage] = useState('');
  
  // Получаем сообщения для активного чата
  const activeMessages = messages[1] || []; // Для примера используем первый чат
  
  // Отправка нового сообщения
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // Здесь был бы API-запрос для отправки сообщения
    console.log('Message sent:', newMessage);
    setNewMessage('');
  };

  return (
    <Layout>
      <div className="bg-gameverse-light rounded-lg overflow-hidden h-[calc(100vh-200px)] flex">
        {/* Список чатов */}
        <div className="w-72 bg-gameverse-darker overflow-y-auto">
          <h2 className="text-white font-bold p-4 border-b border-gameverse-light">Чаты</h2>
          
          <div>
            {chatUsers.map(user => (
              <div 
                key={user.id}
                className={`flex items-center gap-3 p-4 hover:bg-gameverse-light cursor-pointer ${activeChat === user.id ? 'bg-gameverse-light' : ''}`}
                onClick={() => setActiveChat(user.id)}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{user.username}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Активный чат */}
        <div className="flex-grow flex flex-col">
          {activeChat ? (
            <>
              {/* Шапка чата */}
              <div className="bg-gameverse-darker p-4 flex items-center gap-3 border-b border-gameverse-light">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src={users.find(u => u.id === activeChat)?.avatar} 
                    alt={users.find(u => u.id === activeChat)?.username} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium">{users.find(u => u.id === activeChat)?.username}</h3>
              </div>
              
              {/* Сообщения */}
              <div className="flex-grow p-4 overflow-y-auto">
                {activeMessages.map(message => {
                  const isCurrentUser = message.senderId === currentUser.id;
                  return (
                    <div 
                      key={message.id}
                      className={`mb-4 flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] p-3 rounded-lg ${isCurrentUser ? 'bg-gameverse-red text-white' : 'bg-gameverse-darker text-gray-200'}`}>
                        <p>{message.content}</p>
                        <span className={`text-xs ${isCurrentUser ? 'text-red-200' : 'text-gray-400'} block mt-1`}>
                          {message.timestamp}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Форма отправки сообщений */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-gameverse-light flex gap-2">
                <input
                  type="text"
                  placeholder="Введите сообщение..."
                  className="custom-input flex-grow"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type="submit" className="custom-button">Отправить</button>
              </form>
            </>
          ) : (
            <div className="flex-grow flex items-center justify-center">
              <p className="text-gray-400">Выберите чат, чтобы начать общение</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Chats;
