import { useState } from "react";

export const Input = ({ onChangeCallback }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    onChangeCallback(inputValue);
  };

  return (
    <input
      type="text"
      placeholder="Wyszukaj..."
      value={value}
      onChange={handleChange}
    />
  );
};
