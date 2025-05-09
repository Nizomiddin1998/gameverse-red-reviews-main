import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import Layout from "@/components/Layout";
import { blogs } from "@/data/mockData";
import useHooks from "./useHooks";

// Страница отдельного блога
const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = parseInt(id || "0");
  const { blogInfo, mutate } = useHooks();
  // Находим блог по ID

  // Стейт для лайков и дизлайков
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);

  // Обработчики кликов по кнопкам лайка и дизлайка
  const handleLike = () => {
    mutate();
  };

  // const handleDislike = () => {
  //   if (hasDisliked) {
  //     setDislikes((prev) => prev - 1);
  //     setHasDisliked(false);
  //   } else {
  //     setDislikes((prev) => prev + 1);
  //     setHasDisliked(true);

  //     if (hasLiked) {
  //       setLikes((prev) => prev - 1);
  //       setHasLiked(false);
  //     }
  //   }
  // };

  // Если блог не найден, показываем сообщение об ошибке
  if (!blogInfo) {
    return (
      <Layout>
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold text-white mb-4">Блог не найден</h1>
          <p className="text-gray-400">
            Запрашиваемый блог не существует или был удален.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto">
        {/* Заголовок блога */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {blogInfo?.name}
        </h1>

        {/* Метаданные блога */}
        <div className="flex flex-wrap gap-4 text-gray-300 mb-8">
          <span className="text-gameverse-red">{blogInfo?.user?.login}</span>
          <span>{blogInfo?.date}</span>
          <span>{blogInfo?.genre}</span>
        </div>

        {/* Изображение блога */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={blogInfo?.image}
            alt={blogInfo?.name}
            className="w-full h-auto object-cover"
            style={{ maxHeight: "500px" }}
          />
        </div>

        {/* Содержимое блога */}
        <div className="bg-gameverse-light p-6 rounded-lg mb-8">
          <div className="text-gray-200 leading-relaxed space-y-4">
            <p>{blogInfo?.info}</p>
            {/* <p>
              Видеоигры уже давно перестали быть просто развлечением — они стали
              настоящим искусством, способным вызывать сильные эмоции и
              передавать глубокие истории не хуже, чем литература или кино.
            </p>
            <p>
              В современном мире игры становятся все более комплексными,
              предлагая игрокам не только увлекательный геймплей, но и
              проработанный нарратив, запоминающихся персонажей и эмоциональные
              сюжеты.
            </p>
            <p>
              Важно понимать, что геймдизайн — это сложный процесс, требующий от
              разработчиков глубокого понимания психологии игроков и умения
              создавать по-настоящему увлекательный опыт.
            </p>
            <p>
              В будущем мы, вероятно, увидим еще более инновационные подходы к
              созданию игр, с использованием передовых технологий и новых
              методов повествования.
            </p> */}
          </div>
        </div>

        {/* Лайки и дизлайки */}
        <div className="flex gap-6 justify-center mb-8">
          <button
            className={`flex items-center gap-2 py-2 px-4 rounded-full ${
              blogInfo?.liked
                ? "bg-gameverse-red text-white"
                : "bg-gameverse-light text-white hover:bg-opacity-80"
            }`}
            onClick={handleLike}
          >
            <ThumbsUp size={18} />
            <span>{blogInfo?.countLike}</span>
          </button>

          {/* <button
            className={`flex items-center gap-2 py-2 px-4 rounded-full ${
              hasDisliked
                ? "bg-gameverse-red text-white"
                : "bg-gameverse-light text-white hover:bg-opacity-80"
            }`}
            onClick={handleDislike}
          >
            <ThumbsDown size={18} />
            <span>{dislikes}</span>
          </button> */}
        </div>
      </article>
    </Layout>
  );
};

export default Blog;
