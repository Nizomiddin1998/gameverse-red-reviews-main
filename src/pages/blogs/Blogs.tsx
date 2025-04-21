import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import useHooks from "./useHooks";

// Страница "Блоги"
const Blogs = () => {
  const {
    blogs,
    category,
    searchTerm,
    selectedGenre,
    setSearchTerm,
    setSelectedGenre,
  } = useHooks();
  // Фильтрация блогов по поисковому запросу и жанру

  return (
    <Layout>
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold text-white">Блоги</h1>
        <Link to="/write-blog" className="custom-button">
          Написать блог
        </Link>
      </div>

      {/* Фильтры и поиск */}
      <div className="bg-gameverse-light p-4 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Поиск блогов..."
              className="custom-input pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>

          <select
            className="custom-input md:w-1/4"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {category?.map((genre: { id: number; name: string }) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Список блогов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs?.map((blog: any) => (
          <Link to={`/blog/${blog.id}`} key={blog.id} className="blog-card">
            <div className="h-56 overflow-hidden">
              <img
                src={blog?.image}
                alt={blog?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white text-lg mb-2 line-clamp-2">
                {blog?.name}
              </h3>
              <div className="flex flex-col text-sm text-gray-300">
                <span className="text-gameverse-red font-medium">
                  {blog?.user?.login}
                </span>
                <span>{blog?.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {blogs?.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-400 text-lg">
            Блоги не найдены. Попробуйте изменить параметры поиска.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Blogs;
