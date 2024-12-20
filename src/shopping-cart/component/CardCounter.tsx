"use client";

import { useState } from "react";

interface IProps {
  value?: number;
}

export const CardCounter = ({ value = 10 }: IProps) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = () => setCounter((prev) => prev + 1);
  const handleRemove = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Agregar
        </button>
        <button
          onClick={handleRemove}
          className="px-4 py-2 bg-red-500 text-white rounded-md ml-1"
        >
          Quitar
        </button>
      </div>
    </>
  );
};
