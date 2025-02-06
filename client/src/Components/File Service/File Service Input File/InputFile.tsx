import React, { useRef } from "react";
import "./InputFile.css";
import { useFormContext } from "react-hook-form";

interface InputFileProps {
  setValue: (name: string, value: any) => void;
  getValues: (name: string) => any; // Добавляем getValues для получения текущих значений
}

const InputFile: React.FC<InputFileProps> = ({ setValue, getValues }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files); // Преобразуем файлы в массив
      const existingFiles = getValues("files") || []; // Получаем текущие файлы из формы

      // Обновляем поле "files", добавляя новые файлы к существующим
      setValue("files", [...existingFiles, ...newFiles]);
    }
  };

  return (
    <div className="input-file">
      <p className="input-file__title">Нажмите чтобы загрузить файл</p>
      <p className="input-file__desc">Размер файла не должен превышать 10 МБ</p>
      <input
        type="file"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={handleFileChange}
        multiple // Разрешаем выбирать несколько файлов
      />
      <button onClick={() => inputRef.current?.click()}>Загрузить файл</button>
    </div>
  );
};

export default InputFile;
