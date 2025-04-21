import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Импорт всех страниц сайта
import Index from "./pages/main/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Games from "./pages/games/Games";
import Game from "./pages/game/Game";
import Blogs from "./pages/blogs/Blogs";
import Blog from "./pages/blog/Blog";
import Profile from "./pages/profile/Profile";
import Chats from "./pages/chat/Chats";
import Friends from "./pages/Friends";
import FAQ from "./pages/FAQ";
import WriteReview from "./pages/write-riview/WriteReview";
import WriteBlog from "./pages/write-blog/WriteBlog";
import Upcoming from "./pages/Upcoming";
import Auth from "./pages/auth/Auth"; // Добавляем импорт страницы авторизации
import { queryClient } from "./configs/react-query";

// Главный компонент приложения
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Страница авторизации */}
            <Route path="/auth" element={<Auth />} />

            {/* Главная страница */}
            <Route path="/" element={<Index />} />

            {/* Страницы информации */}
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />

            {/* Игры и рецензии */}
            <Route path="/games" element={<Games />} />
            <Route path="/game/:id" element={<Game />} />
            <Route path="/write-review" element={<WriteReview />} />
            <Route path="/upcoming" element={<Upcoming />} />

            {/* Блоги */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/write-blog" element={<WriteBlog />} />

            {/* Профиль и социальное */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/friends" element={<Friends />} />

            {/* Обработка несуществующих маршрутов */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
