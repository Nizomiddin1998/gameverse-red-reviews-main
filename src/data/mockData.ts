import { Game, Blog, User, Review, Message, FAQ } from "../types";

// Моковые данные для игр
export const games: Game[] = [
  {
    id: 1,
    title: "Elden Ring",
    releaseYear: 2022,
    genre: "RPG",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
    description:
      "Elden Ring – компьютерная игра в жанре action/RPG с открытым миром, разработанная японской компанией FromSoftware и выпущенная компанией Bandai Namco Entertainment для PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S и Windows.",
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    releaseYear: 2020,
    genre: "RPG",
    image:
      "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?q=80&w=2070&auto=format&fit=crop",
    description:
      "Cyberpunk 2077 — компьютерная игра в жанре action/RPG, разработанная и изданная польской студией CD Projekt.",
  },
  {
    id: 3,
    title: "The Last of Us Part II",
    releaseYear: 2020,
    genre: "Action-Adventure",
    image:
      "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=2072&auto=format&fit=crop",
    description:
      "The Last of Us Part II — компьютерная игра в жанре action-adventure с элементами survival horror и стелс-экшена, разработанная компанией Naughty Dog и изданная Sony Interactive Entertainment.",
  },
  {
    id: 4,
    title: "Ghost of Tsushima",
    releaseYear: 2020,
    genre: "Action-Adventure",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    description:
      "Ghost of Tsushima — компьютерная игра в жанре action-adventure с открытым миром, разработанная студией Sucker Punch Productions и изданная Sony Interactive Entertainment для PlayStation 4.",
  },
  {
    id: 5,
    title: "Red Dead Redemption 2",
    releaseYear: 2018,
    genre: "Action-Adventure",
    image:
      "https://images.unsplash.com/photo-1511808657289-3c1065ec1d8d?q=80&w=2070&auto=format&fit=crop",
    description:
      "Red Dead Redemption 2 — компьютерная игра в жанрах action-adventure и шутера от третьего лица с открытым миром, разработанная Rockstar Studios и выпущенная Rockstar Games для консолей PlayStation 4 и Xbox One.",
  },
];

// Моковые данные для будущих релизов
export const upcomingGames: Game[] = [
  {
    id: 6,
    title: "GTA 6",
    releaseYear: 2025,
    genre: "Action",
    image:
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop",
    isUpcoming: true,
  },
  {
    id: 7,
    title: "The Elder Scrolls VI",
    releaseYear: 2026,
    genre: "RPG",
    image:
      "https://images.unsplash.com/photo-1616161560681-63be9c87d682?q=80&w=2070&auto=format&fit=crop",
    isUpcoming: true,
  },
  {
    id: 8,
    title: "Fable 4",
    releaseYear: 2025,
    genre: "RPG",
    image:
      "https://images.unsplash.com/photo-1618850809602-da652f5611bf?q=80&w=2072&auto=format&fit=crop",
    isUpcoming: true,
  },
  {
    id: 9,
    title: "Dragon Age: Dreadwolf",
    releaseYear: 2025,
    genre: "RPG",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
    isUpcoming: true,
  },
  {
    id: 10,
    title: "Assassin's Creed: Shadows",
    releaseYear: 2024,
    genre: "Action-Adventure",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    isUpcoming: true,
  },
];

// Моковые данные для блогов
export const blogs: Blog[] = [
  {
    id: 1,
    title: "Будущее игр с искусственным интеллектом",
    content:
      "Искусственный интеллект становится все более интегрированным в игры, предлагая беспрецедентный уровень интерактивности...",
    author: "GameMaster",
    authorId: 1,
    date: "10.04.2025",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    genre: "Технологии",
    likes: 56,
    dislikes: 3,
  },
  {
    id: 2,
    title: "Как RPG меняют представление о нарративе",
    content:
      "Ролевые игры создали новые стандарты для повествования, позволяя игрокам формировать собственные истории...",
    author: "RPGFanatic",
    authorId: 2,
    date: "02.04.2025",
    image:
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop",
    genre: "RPG",
    likes: 42,
    dislikes: 5,
  },
  {
    id: 3,
    title: "История эволюции шутеров от первого лица",
    content:
      "От Doom до современных тайтлов: как эволюционировал жанр FPS за последние 30 лет...",
    author: "ShooterPro",
    authorId: 3,
    date: "28.03.2025",
    image:
      "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=2070&auto=format&fit=crop",
    genre: "FPS",
    likes: 39,
    dislikes: 2,
  },
  {
    id: 4,
    title: "Инди-революция: как маленькие студии меняют индустрию",
    content:
      "Небольшие независимые студии создают инновационные проекты, которые конкурируют с крупнобюджетными играми...",
    author: "IndieGuru",
    authorId: 4,
    date: "20.03.2025",
    image:
      "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?q=80&w=2070&auto=format&fit=crop",
    genre: "Инди",
    likes: 64,
    dislikes: 1,
  },
  {
    id: 5,
    title: "Экологические темы в современных играх",
    content:
      "Всё больше разработчиков используют игры как средство для привлечения внимания к экологическим проблемам...",
    author: "EcoGamer",
    authorId: 5,
    date: "15.03.2025",
    image:
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=2070&auto=format&fit=crop",
    genre: "Анализ",
    likes: 29,
    dislikes: 8,
  },
];

// Моковые данные для пользователей
export const users: User[] = [
  {
    id: 1,
    username: "GameMaster",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop",
    about:
      "Игровой энтузиаст с 15-летним стажем, специализируюсь на RPG и стратегиях",
    friends: 128,
    blogs: 24,
    reviews: 76,
  },
  {
    id: 2,
    username: "RPGFanatic",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop",
    about: "Любитель ролевых игр и всего, что связано с фэнтези",
    friends: 85,
    blogs: 17,
    reviews: 54,
  },
  {
    id: 3,
    username: "ShooterPro",
    avatar:
      "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?q=80&w=1887&auto=format&fit=crop",
    about: "Киберспортсмен, специализирующийся на шутерах",
    friends: 201,
    blogs: 9,
    reviews: 48,
  },
  {
    id: 4,
    username: "IndieGuru",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    about: "Поддерживаю независимых разработчиков и малобюджетные проекты",
    friends: 67,
    blogs: 31,
    reviews: 93,
  },
  {
    id: 5,
    username: "EcoGamer",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1740&auto=format&fit=crop",
    about: "Исследую экологические темы в видеоиграх",
    friends: 42,
    blogs: 15,
    reviews: 29,
  },
  {
    id: 6,
    username: "StrategyKing",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    about: "Любитель стратегических игр и сложных головоломок",
    friends: 93,
    blogs: 12,
    reviews: 41,
  },
  {
    id: 7,
    username: "RetroGamerGirl",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    about: "Коллекционирую и играю в ретро-игры с конца 80-х",
    friends: 124,
    blogs: 28,
    reviews: 67,
  },
  {
    id: 8,
    username: "MobileGameDev",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    about: "Разработчик мобильных игр и энтузиаст геймдизайна",
    friends: 78,
    blogs: 19,
    reviews: 32,
  },
  {
    id: 9,
    username: "VRExplorer",
    avatar:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1887&auto=format&fit=crop",
    about: "Исследую границы VR-гейминга и виртуальной реальности",
    friends: 56,
    blogs: 11,
    reviews: 23,
  },
  {
    id: 10,
    username: "GameArtist",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop",
    about: "Художник, создающий концепт-арты для инди-игр",
    friends: 89,
    blogs: 7,
    reviews: 19,
  },
];

// Моковые данные для рецензий
export const reviews: Review[] = [
  {
    id: 1,
    gameId: 1,
    userId: 1,
    username: "GameMaster",
    content:
      "Elden Ring – это потрясающая RPG с открытым миром, которая бросает вызов и награждает за исследование. Боевая система и дизайн уровней на высоте!",
    rating: 5,
    date: "15.03.2025",
  },
  {
    id: 2,
    gameId: 1,
    userId: 2,
    username: "RPGFanatic",
    content:
      "FromSoftware в очередной раз доказали, что они мастера создания захватывающих миров. Сложно, но очень затягивает.",
    rating: 5,
    date: "12.03.2025",
  },
  {
    id: 3,
    gameId: 2,
    userId: 3,
    username: "ShooterPro",
    content:
      "После всех патчей Cyberpunk 2077 стал отличной игрой. Интересный сюжет и проработанный мир, но все еще встречаются баги.",
    rating: 4,
    date: "10.03.2025",
  },
  {
    id: 4,
    gameId: 3,
    userId: 4,
    username: "IndieGuru",
    content:
      "The Last of Us Part II – эмоциональная и сложная история о мести и ее последствиях. Визуально впечатляет, геймплей отточен.",
    rating: 5,
    date: "05.03.2025",
  },
  {
    id: 5,
    gameId: 4,
    userId: 5,
    username: "EcoGamer",
    content:
      "Ghost of Tsushima – визуально потрясающая игра с увлекательным сюжетом и хорошей боевой системой. Самурайское приключение высшего класса!",
    rating: 5,
    date: "01.03.2025",
  },
];

// Моковые данные для сообщений
export const messages: Record<number, Message[]> = {
  1: [
    {
      id: 1,
      senderId: 1,
      receiverId: 2,
      content: "Привет! Что думаешь о последнем DLC для Elden Ring?",
      timestamp: "14:23 15.04.2025",
    },
    {
      id: 2,
      senderId: 2,
      receiverId: 1,
      content:
        "Еще не играл, но очень жду! Говорят, там будет новый класс оружия.",
      timestamp: "14:25 15.04.2025",
    },
    {
      id: 3,
      senderId: 1,
      receiverId: 2,
      content:
        "Да, должны добавить магические катаны! Обязательно напиши свое мнение, когда поиграешь.",
      timestamp: "14:28 15.04.2025",
    },
  ],
  2: [
    {
      id: 4,
      senderId: 1,
      receiverId: 3,
      content:
        "Видел твою рецензию на Cyberpunk. Полностью согласен с тобой насчет багов.",
      timestamp: "09:15 14.04.2025",
    },
    {
      id: 5,
      senderId: 3,
      receiverId: 1,
      content:
        "Спасибо! Но они исправили многое после патча 2.0. Стоит ещё раз попробовать.",
      timestamp: "10:42 14.04.2025",
    },
  ],
};

// Моковые данные для FAQ
export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Как написать рецензию на игру?",
    answer:
      'Чтобы написать рецензию, перейдите на страницу "Игры", выберите нужную игру и нажмите кнопку "Написать рецензию". Заполните форму и нажмите "Опубликовать".',
  },
  {
    id: 2,
    question: "Как изменить свой аватар?",
    answer:
      "Для изменения аватара перейдите на страницу своего профиля. В разделе настроек профиля вы найдете опцию для загрузки новой фотографии.",
  },
  {
    id: 3,
    question: "Как добавить друга?",
    answer:
      'Перейдите на страницу "Друзья", найдите нужного пользователя во вкладке "Другие пользователи" и нажмите на кнопку с иконкой плюса.',
  },
  {
    id: 4,
    question: "Как изменить пароль?",
    answer:
      'Для изменения пароля перейдите на страницу своего профиля. В настройках профиля введите новый пароль, подтвердите его и нажмите "Сменить пароль".',
  },
  {
    id: 5,
    question: "Как опубликовать блог?",
    answer:
      'Для публикации блога нажмите на кнопку "Написать блог" на странице "Блоги". Заполните все необходимые поля и нажмите "Опубликовать".',
  },
];

// Жанры игр для фильтрации
export const genres = [
  "Все жанры",
  "Action",
  "RPG",
  "Adventure",
  "Action-Adventure",
  "Strategy",
  "Simulation",
  "Sports",
  "Racing",
  "FPS",
  "Horror",
  "MMORPG",
  "Fighting",
  "Puzzle",
];
