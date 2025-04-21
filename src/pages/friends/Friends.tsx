import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import Layout from "@/components/Layout";
import { users } from "@/data/mockData";
import useHooks from "./useHooks";

// Страница "Друзья"
const Friends = () => {
  const [activeTab, setActiveTab] = useState("friends");
  const { friends, friendsSuggestions, addFriend, removeFriend } = useHooks();
  // Разделяем пользователей на друзей и других для примера
  const friendUsers = users.slice(0, 5);
  const otherUsers = users.slice(5);

  // Симуляция добавления/удаления друзей (для реального приложения здесь был бы API-запрос)
  const handleAddFriend = (userId: number) => {
    console.log("Friend added:", userId);
    addFriend({ user_id: userId });
  };

  const handleRemoveFriend = (userId: number) => {
    console.log("Friend removed:", userId);
    removeFriend({ id: userId });
  };
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Друзья</h1>

        {/* Вкладки */}
        <div className="flex mb-8">
          <button
            className={`tab-button ${activeTab === "friends" ? "active" : ""}`}
            onClick={() => setActiveTab("friends")}
          >
            Мои друзья
          </button>
          <button
            className={`tab-button ${activeTab === "others" ? "active" : ""}`}
            onClick={() => setActiveTab("others")}
          >
            Другие пользователи
          </button>
        </div>

        {/* Список друзей */}
        {activeTab === "friends" && (
          <div className="space-y-6">
            {friends?.map((user: any) => (
              <div key={user?.id} className="friend-card">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={user?.avatar}
                    alt={user?.login}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="text-white font-bold">{user?.login}</h3>
                  <p className="text-gray-300 text-sm my-1 line-clamp-2">
                    {user?.info || "-"}
                  </p>

                  <div className="flex gap-6 mt-2 text-sm text-gray-400">
                    <div>
                      <span className="text-gameverse-red">
                        {user.friends || 0}
                      </span>{" "}
                      друзей
                    </div>
                    <div>
                      <span className="text-gameverse-red">
                        {user.blogs || 0}
                      </span>{" "}
                      блогов
                    </div>
                    <div>
                      <span className="text-gameverse-red">
                        {user.reviews || 0}
                      </span>{" "}
                      рецензий
                    </div>
                  </div>
                </div>

                <button
                  className="bg-gameverse-red hover:bg-opacity-80 text-white p-2 rounded-full transition-colors"
                  onClick={() => handleRemoveFriend(user.id)}
                >
                  <X size={18} />
                </button>
              </div>
            ))}

            {friendUsers.length === 0 && (
              <div className="text-center py-8 bg-gameverse-light rounded-lg">
                <p className="text-gray-400">
                  У вас пока нет друзей. Добавьте их из списка пользователей.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Список других пользователей */}
        {activeTab === "others" && (
          <div className="space-y-6">
            {friendsSuggestions?.map((user: any) => (
              <div key={user?.id} className="friend-card">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={user?.avatar}
                    alt={user?.login}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="text-white font-bold">{user?.login}</h3>
                  <p className="text-gray-300 text-sm my-1 line-clamp-2">
                    {user?.info || "-"}
                  </p>

                  <div className="flex gap-6 mt-2 text-sm text-gray-400">
                    <div>
                      <span className="text-gameverse-red">
                        {user?.friends || 0}
                      </span>{" "}
                      друзей
                    </div>
                    <div>
                      <span className="text-gameverse-red">
                        {user?.blogs || 0}
                      </span>{" "}
                      блогов
                    </div>
                    <div>
                      <span className="text-gameverse-red">
                        {user?.reviews || 0}
                      </span>{" "}
                      рецензий
                    </div>
                  </div>
                </div>

                <button
                  className="bg-gameverse-red hover:bg-opacity-80 text-white p-2 rounded-full transition-colors"
                  onClick={() => handleAddFriend(user?.id)}
                >
                  <Plus size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Friends;
