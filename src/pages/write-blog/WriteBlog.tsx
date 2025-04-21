import Layout from "@/components/Layout";
// import { genres } from "@/data/mockData";
import useHooks from "./useHooks";
// import { ImageUpload } from "@/components/upload";

// Страница "Написать блог"
const WriteBlog = () => {
  // const [newAvatar, setNewAvatar] = useState<File | null>(null);

  const {
    category,
    title,
    setTitle,
    selectedGenre,
    setSelectedGenre,
    content,
    setContent,
    imageUrl,
    setImageUrl,
    handleSubmit,
  } = useHooks();
  // Обработка отправки формы

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Написать блог</h1>

        <div className="bg-gameverse-light p-6 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="title">
                Заголовок
              </label>
              <input
                id="title"
                type="text"
                className="custom-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Введите заголовок блога..."
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="genre">
                Жанр
              </label>
              <select
                id="genre"
                className="custom-input"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                required
              >
                <option value="">Выберите жанр</option>
                {category?.map(
                  (
                    genre // Пропускаем "Все жанры"
                  ) => (
                    <option key={genre?.id} value={genre?.id}>
                      {genre?.name}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="content">
                Текст блога
              </label>
              <textarea
                id="content"
                className="custom-input min-h-[300px]"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Напишите свой блог здесь..."
                required
              ></textarea>
            </div>

            <div className="mb-8">
              <label className="block text-gray-300 mb-2" htmlFor="image">
                Картинка для блога (URL)
              </label>
              <input
                id="image"
                type="text"
                className="custom-input"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Вставьте URL изображения..."
                required
              />
              {/* <ImageUpload avatar={newAvatar} setAvatar={setNewAvatar} /> */}

              {imageUrl && (
                <div className="mt-2 h-40 overflow-hidden rounded">
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <button type="submit" className="custom-button w-full">
              Опубликовать
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default WriteBlog;
