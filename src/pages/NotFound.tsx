
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

// Страница с ошибкой 404 (страница не найдена)
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Ошибка: Пользователь пытался получить доступ к несуществующему маршруту:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gameverse-dark">
      <div className="text-center p-8 bg-gameverse-light rounded-lg shadow-xl max-w-md">
        <h1 className="text-6xl font-bold text-gameverse-red mb-4">404</h1>
        <p className="text-xl text-white mb-6">Упс! Страница не найдена</p>
        <p className="text-gray-300 mb-8">
          Страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Link to="/" className="custom-button">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
