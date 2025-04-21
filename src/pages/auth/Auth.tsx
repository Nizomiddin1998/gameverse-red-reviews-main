import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { useMutation } from "@tanstack/react-query";
import { request } from "@/shared/api/requests";
import { setUser } from "@/utils/user";
import { ErrorProps } from "@/types/error";
import { ENDPOINTS } from "@/shared/endpoints";

interface FormValues {
  login: string;
  password: string;
  info?: string;
}

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");
  const navigate = useNavigate();

  const { mutate } = useMutation(
    (data: FormValues) =>
      isLogin
        ? request.post(ENDPOINTS.LOGIN, data)
        : request.post(ENDPOINTS.REGISTER, data),
    {
      onSuccess: (res) => {
        setUser(true, res.data?.token);
        navigate("/profile");
      },
      onError: (err: ErrorProps) => {
        toast.error(err.response?.data?.message || "Что-то пошло не так.");
        console.log(err.response, "err");
      },
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLogin) {
      const payload = {
        login: username,
        password: password,
        info: about,
      };
      mutate(payload);
    } else {
      const payload = {
        login: username,
        password: password,
      };
      mutate(payload);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-gameverse-light p-8 rounded-lg">
        <h1 className="text-2xl font-bold text-white mb-6">
          {isLogin ? "Вход в аккаунт" : "Регистрация"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Логин</label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Пароль</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-gray-300 mb-2">О себе</label>
              <Textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="w-full"
              />
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gameverse-red hover:bg-gameverse-red/90"
          >
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>
        </form>

        <button
          className="mt-4 text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Создать аккаунт" : "Уже есть аккаунт? Войти"}
        </button>
      </div>
    </Layout>
  );
};

export default Auth;
