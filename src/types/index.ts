
// Тип данных для игр
export interface Game {
  id: number;
  title: string;
  releaseYear: number;
  genre: string;
  image: string;
  description?: string;
  isUpcoming?: boolean;
}

// Тип данных для блогов
export interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  authorId: number;
  date: string;
  image: string;
  genre: string;
  likes: number;
  dislikes: number;
}

// Тип данных для пользователей
export interface User {
  id: number;
  username: string;
  avatar: string;
  about: string;
  friends: number;
  blogs: number;
  reviews: number;
}

// Тип данных для рецензий
export interface Review {
  id: number;
  gameId: number;
  userId: number;
  username: string;
  content: string;
  rating: number;
  date: string;
}

// Тип данных для сообщений в чате
export interface Message {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: string;
}

// Тип данных для часто задаваемых вопросов
export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
