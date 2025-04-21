import React, { useState } from "react";
import Layout from "../../components/Layout";
import { messages, users } from "../../data/mockData";
import { useChat } from "./useChat";
import dayjs from "dayjs";

// Страница "Чаты"
const Chats = () => {
  const {
    chats,
    activeChat,
    newMessage,
    setNewMessage,
    setActiveChat,
    activeMessages,
    handleSendMessage,
  } = useChat();

  return (
    <Layout>
      <div className="bg-gameverse-light rounded-lg overflow-hidden h-[calc(100vh-200px)] flex">
        {/* Список чатов */}
        <div className="w-72 bg-gameverse-darker overflow-y-auto">
          <h2 className="text-white font-bold p-4 border-b border-gameverse-light">
            Чаты
          </h2>

          <div>
            {chats.map((user) => (
              <div
                key={user?.id}
                className={`flex items-center gap-3 p-4 hover:bg-gameverse-light cursor-pointer ${
                  activeChat === user?.id ? "bg-gameverse-light" : ""
                }`}
                onClick={() => setActiveChat(user?.id)}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={
                      user?.avatar === null
                        ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop"
                        : user?.avatar
                    }
                    alt={user?.login}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-medium">{user?.login}</h3>
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
                    src={
                      chats?.find((u) => u.id === activeChat)?.avatar === null
                        ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop"
                        : chats?.find((u) => u.id === activeChat)?.avatar
                    }
                    alt={chats?.find((u) => u.id === activeChat)?.login}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium">
                  {chats?.find((u) => u.id === activeChat)?.login}
                </h3>
              </div>

              {/* Сообщения */}
              <div className="flex-grow p-4 overflow-y-auto">
                {activeMessages?.map((message) => {
                  const isCurrentUser = message?.from === "me";
                  return (
                    <div
                      key={message?.id}
                      className={`mb-4 flex ${
                        isCurrentUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[70%] p-3 rounded-lg ${
                          isCurrentUser
                            ? "bg-gameverse-red text-white"
                            : "bg-gameverse-darker text-gray-200"
                        }`}
                      >
                        <p>{message?.message}</p>
                        <span
                          className={`text-xs ${
                            isCurrentUser ? "text-red-200" : "text-gray-400"
                          } block mt-1`}
                        >
                          {dayjs(message?.date).format("HH:mm DD.MM.YYYY")}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Форма отправки сообщений */}
              <form
                onSubmit={handleSendMessage}
                className="p-4 border-t border-gameverse-light flex gap-2"
              >
                <input
                  type="text"
                  placeholder="Введите сообщение..."
                  className="custom-input flex-grow"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type="submit" className="custom-button">
                  Отправить
                </button>
              </form>
            </>
          ) : (
            <div className="flex-grow flex items-center justify-center">
              <p className="text-gray-400">
                Выберите чат, чтобы начать общение
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Chats;
