import React, { useState } from "react";

interface ImageUploadProps {
  avatar: File | null;
  setAvatar: React.Dispatch<React.SetStateAction<File>>;
}

export const ImageUpload = ({ avatar, setAvatar }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      alert("Аватар успешно изменен!");
    }
  };

  return (
    <div className="flex flex-col gap-4 py-4  rounded-2xl shadow-sm w-full max-w-md">
      {preview && (
        <div className="w-48 h-48 border border-gray-300 rounded-xl overflow-hidden">
          <img
            src={preview}
            alt="Preview"
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <label className="cursor-pointer inline-flex text-white font-semibold py-2  rounded-xl transition">
        <span className="custom-button">Загрузить изображение</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </label>
    </div>
  );
};
