import { useState } from "react";
import { request } from "@/shared/api/requests";
import { ErrorProps } from "@/types/error";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "../../components/ui/sonner";

export interface ChatItem {
  id: number;
  login: string;
  avatar: string | null;
  last_message: string;
  last_message_date: string; // ISO datetime string
  from: "me" | "other"; // agar boshqa qiymatlar ham bo‘lishi mumkin bo‘lsa: string
}

export interface ChatResponse {
  message: string;
  data: ChatItem[];
}

export interface Message {
  id: number;
  message: string;
  date: string; // ISO formatdagi datetime
  from: "me" | "you"; // agar boshqa qiymatlar bo‘lsa: string
}

interface FormValues {
  user_id: number;
  message: string;
}

export const useChat = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { data: chats = [] } = useQuery({
    queryKey: ["chats"],
    queryFn: () => request<ChatResponse>("chats"),
    select: (res) => {
      return res.data?.data;
    },
  });

  const { refetch } = useQuery({
    queryKey: ["chats", activeChat],
    queryFn: () => request<Message[]>(`chats/${activeChat}`),
    select: (res) => {
      return res.data;
    },
    onSuccess: (res) => {
      setMessages(res);
    },
    enabled: activeChat > 0,
  });

  const { mutate } = useMutation(
    (data: FormValues) => request.post("chats/sendMessage", data),
    {
      onSuccess: () => {
        refetch();
      },
      onError: (err: ErrorProps) => {
        toast.error(err.response?.data?.message || "Что-то пошло не так.");
      },
    }
  );

  // Отправка нового сообщения
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    mutate({
      user_id: activeChat,
      message: newMessage,
    });
    setNewMessage("");
  };

  return {
    chats,
    activeChat,
    newMessage,
    setNewMessage,
    setActiveChat,
    activeMessages: messages,
    handleSendMessage,
  };
};
