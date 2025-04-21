import { useState } from "react";
import Layout from "../../components/Layout";
import { users, games, blogs, reviews } from "../../data/mockData";
import { useAuth } from "../../contexts/AuthContext";
import { LogOut } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import { ErrorProps } from "@/types/error";
import { toast } from "../../components/ui/sonner";
import { usePage } from "./usePage";
import dayjs from "dayjs";

const baseURL = import.meta.env.VITE_API_IMAGE_URL;
// Страница профиля пользователя
const Profile = () => {
  const { logout } = useAuth();
  const { reviews, myBlogs, favouriteGames } = usePage();

  // Берем первого пользователя из моковых данных для примера
  const user = users[0];

  // Состояния для инпутов
  const [about, setAbout] = useState(user.about);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newAvatar, setNewAvatar] = useState("");

  // Состояние для активной вкладки
  const [activeTab, setActiveTab] = useState("favorites");

  const { data: profile = null } = useQuery({
    queryKey: [REACT_QUERY_KEYS.VIEW_MY_PROFILE],
    queryFn: () => request(ENDPOINTS.USER),
    select: (res) => {
      return res?.data?.data;
    },
    onSuccess: (res) => {
      setAbout(res?.info);
    },
  });

  const { mutate } = useMutation(
    (data: any) =>
      request.post(ENDPOINTS.USER, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    {
      onSuccess: (res) => {
        alert("Информация успешно сохранена!");
      },
      onError: (err: ErrorProps) => {
        toast.error(err.response?.data?.message || "Что-то пошло не так.");
      },
    }
  );

  const handleChangeAvatar = () => {
    if (!newAvatar) {
      alert("Пожалуйста, укажите URL изображения!");
      return;
    }
    setNewAvatar("");
  };

  const handleSave = () => {
    if (newPassword !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }
    if (newPassword.length < 6) {
      alert("Пароль должен содержать не менее 6 символов!");
      return;
    }
    const formData = new FormData();
    formData.append("login", profile === null ? "shohruxxon" : profile?.login);
    formData.append("password", newPassword);
    formData.append("info", about);
    formData.append("avatar", newAvatar);
    mutate(formData);
  };

  console.log(favouriteGames, "favouriteGames");

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {/* Шапка профиля с аватаром, статистикой и кнопкой выхода */}
        <div className="bg-gameverse-light p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={profile === null ? user.avatar : profile?.avatar}
                alt={user.username}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-grow">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-white text-center md:text-left">
                  {profile?.login}
                </h1>
                <Button
                  variant="destructive"
                  onClick={logout}
                  className="flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Сменить аккаунт
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-md">
                <div className="profile-stat">
                  <span className="text-gameverse-red font-bold text-xl">
                    {profile?.all_friends_count}
                  </span>
                  <span className="text-gray-300 text-sm">Друзей</span>
                </div>
                <div className="profile-stat">
                  <span className="text-gameverse-red font-bold text-xl">
                    {profile?.liked_blogs_count}
                  </span>
                  <span className="text-gray-300 text-sm">Блогов</span>
                </div>
                <div className="profile-stat">
                  <span className="text-gameverse-red font-bold text-xl">
                    {profile?.reviews_count}
                  </span>
                  <span className="text-gray-300 text-sm">Рецензий</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Настройки профиля */}
        <div className="bg-gameverse-light p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-white mb-6">
            Настройки профиля
          </h2>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="about">
              О себе
            </label>
            <textarea
              id="about"
              className="custom-input min-h-[100px]"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-6">
            <h3 className="text-white font-medium mb-2">Смена пароля</h3>
            <div className="space-y-3">
              <input
                type="password"
                placeholder="Новый пароль"
                className="custom-input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Подтвердите пароль"
                className="custom-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-2">Смена аватара</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="URL изображения для аватара"
                className="custom-input"
                value={newAvatar}
                onChange={(e) => setNewAvatar(e.target.value)}
              />
              <button className="custom-button" onClick={handleChangeAvatar}>
                Сменить аватар
              </button>
            </div>
            <button className="custom-button mt-3" onClick={handleSave}>
              Сохранить изменения
            </button>
          </div>
        </div>

        {/* Вкладки с контентом пользователя */}
        <div className="bg-gameverse-light rounded-lg overflow-hidden">
          <div className="flex">
            <button
              className={`tab-button ${
                activeTab === "favorites" ? "active" : ""
              }`}
              onClick={() => setActiveTab("favorites")}
            >
              Избранные игры
            </button>
            <button
              className={`tab-button ${activeTab === "blogs" ? "active" : ""}`}
              onClick={() => setActiveTab("blogs")}
            >
              Мои блоги
            </button>
            <button
              className={`tab-button ${
                activeTab === "reviews" ? "active" : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Мои рецензии
            </button>
          </div>

          <div className="p-6">
            {/* Содержимо�� вкладки "Избранные игры" */}
            {activeTab === "favorites" && (
              <div>
                {favouriteGames?.length > 0 ? (
                  <div className="space-y-4">
                    {favouriteGames?.map((game) => (
                      <div
                        key={game?.id}
                        className="flex bg-gameverse-darker p-3 rounded-lg"
                      >
                        <div className="w-16 h-16 rounded overflow-hidden mr-4">
                          <img
                            src={baseURL + game?.game?.photo}
                            alt={game?.game?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium text-white">
                            {game?.game?.name}
                          </h3>
                          <div className="flex justify-between text-sm text-gray-400 mt-1">
                            <span>{game?.game?.year}</span>
                            <span>{game.game?.category?.name}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-center py-4">
                    У вас пока нет избранных игр.
                  </p>
                )}
              </div>
            )}

            {/* Содержимое вкладки "Мои блоги" */}
            {activeTab === "blogs" && (
              <div>
                {myBlogs?.length > 0 ? (
                  <div className="space-y-4">
                    {myBlogs?.map((blog: any) => (
                      <div
                        key={blog?.id}
                        className="flex bg-gameverse-darker p-3 rounded-lg"
                      >
                        <div className="w-16 h-16 rounded overflow-hidden mr-4">
                          <img
                            src={blog?.image}
                            alt={blog?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium text-white">
                            {blog?.info}
                          </h3>
                          <div className="text-sm text-gray-400 mt-1">
                            <span>{dayjs(blog.date).format("DD.MM.YYYY")}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-center py-4">
                    Вы еще не написали ни одного блога.
                  </p>
                )}
              </div>
            )}

            {/* Содержимое вкладки "Мои рецензии" */}
            {activeTab === "reviews" && (
              <div>
                {reviews?.length > 0 ? (
                  <div className="space-y-4">
                    {reviews?.map((review) => {
                      return (
                        <div
                          key={review?.id}
                          className="flex bg-gameverse-darker p-3 rounded-lg"
                        >
                          <div className="flex-grow">
                            <h3 className="font-medium text-white">
                              {review?.game?.name}
                            </h3>
                            <div className="flex justify-between text-sm text-gray-400 mt-1">
                              <span>Оценка: {review?.rate}/5</span>
                              <span>{review?.genre}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-gray-400 text-center py-4">
                    Вы еще не написали ни одной рецензии.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
