import { useState } from "react";
import { StyledInput } from "./input.styled";

export const Input = ({ onChangeCallback }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    onChangeCallback(inputValue);
  };

  return (
    <StyledInput
      type="text"
      placeholder="Wyszukaj..."
      value={value}
      onChange={handleChange}
    />
  );
};
